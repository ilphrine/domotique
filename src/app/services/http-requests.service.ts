import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpRequestsService {

  temperatures$;


  constructor(private http: HttpClient) { }

  findReq(){
    return this.http.get('http://localhost:2009/find').toPromise()
      .then(data=>{
        console.log(data);
        return data;
      });
  }

}