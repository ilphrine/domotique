import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from "../services/http-requests.service";

@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrls: ['./dash-bord.component.scss']
})
export class DashBordComponent implements OnInit {

  temperature$: Promise<any>;

  constructor(private httpService: HttpRequestsService) { }

  ngOnInit(){
    this.temperature$= this.httpService.findReq().then(temperatures=>{
      return temperatures[0].temp;
    });
  }

}
  