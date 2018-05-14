import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DashBordComponent } from "./dash-bord/dash-bord.component";
import { TemperatureDetailComponent } from './temperature-detail/temperature-detail.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';

// routes
const appRoutes: Routes = [
    { path: 'dashbord', component: DashBordComponent},
	{ path: 'tempDetail', component: TemperatureDetailComponent},
	{ path: 'annuaire', component: AnnuaireComponent},
	{ path: '', redirectTo: 'dashbord', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
