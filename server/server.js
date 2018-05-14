const mongoose = require('mongoose');
const SerialPort = require("serialport");
const Readline = require('parser-readline');
require('./schemas/temperature');

const port = new SerialPort("/dev/ttyACM0", {baudRate: 9600}); 
const parser = port.pipe(new Readline());
let tempModel = mongoose.model('temperatures');
let tempRegex = new RegExp('([0-9]+)');
let filter=20;


mongoose.connect("mongodb://localhost/domoBase",function(err) {
  if (err) { throw err; }
});
mongoose.set('debug', true);

mongoose.connection.on('connected',function(){
  console.log('mongoose connected'); 
});

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});


port.on('open',function (err) {
    if (err) {
      return console.log('Error opening port: ', err.message);
    }
    else {
      console.log ("Communication serie Arduino 9600 bauds : Ok")
    }
  });

port.on('data', function(data) {
  tempRegex.exec(data);
  let numb = parseInt(RegExp.$1);

  if (numb >(filter-5) && numb<(filter+5)){
    console.log("valeur filtrée: "+ numb.toString());
    filter= numb;

    let myTemp = new tempModel();
    myTemp.temp = numb.toString();
    myTemp.save(function (err) {
      if (err) { throw err; }
      console.log('température ajoutée avec succès !');
    });
  }
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});
