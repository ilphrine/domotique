import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from "../services/http-requests.service";

@Component({
  selector: 'app-temperature-detail',
  templateUrl: './temperature-detail.component.html',
  styleUrls: ['./temperature-detail.component.scss']
})
export class TemperatureDetailComponent implements OnInit {

    temperatures$: Promise<any>;

  constructor(private httpService: HttpRequestsService) { }

  ngOnInit() {
    this.temperatures$= this.httpService.findReq();
  }

}


//graphique
