const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('./schemas/temperature');

tempModel = mongoose.model('temperatures');

const app = express();
let port ="2009";

mongoose.connect("mongodb://localhost/domoBase",function(err) {
    if (err) { throw err; }
  });
mongoose.set('debug', true);

app.set('port', port);
 
//Enable CORS
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
});

const server = http.createServer(app);
 
app.get('/find', function(req, res) {
  var query = tempModel.find(null);
  query.limit(20);


  query.exec(function (err, comms) {
  if (err) { throw err; }
  // comms est un tableau de hash
  console.log(comms);
  return res.send(comms);
  });
});


//Listen on port
server.listen(port, () => console.log(`API running on localhost:${port}`));

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose REQSERV.JS connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});