import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './COMPONEANT/HOME/home/home.component';
import { ReportComponent } from './COMPONEANT/REPORT/report/report.component';
import { ReportingComponent } from './COMPONEANT/REPORTING/reporting/reporting.component';
import { UserComponent } from './COMPONEANT/USER/user/user.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'report',component:ReportComponent},
  {path:'reporting',component:ReportingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
