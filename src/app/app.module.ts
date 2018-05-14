import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HttpRequestsService } from "./services/http-requests.service";
import { DashBordComponent } from './dash-bord/dash-bord.component';
import { TemperatureDetailComponent } from './temperature-detail/temperature-detail.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';


@NgModule({
  declarations: [
    AppComponent,
    DashBordComponent,
    TemperatureDetailComponent,
    AnnuaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule
  ],
  providers: [
    HttpRequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
