import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailoverComponent } from './COMPONEANT/failover/failover.component';
import { FailureInfraComponent } from './COMPONEANT/failure-infra/failure-infra.component';
import { HomeComponent } from './COMPONEANT/HOME/home/home.component';
import { MonitorInfraComponent } from './COMPONEANT/monitor-infra/monitor-infra.component';
import { ReportComponent } from './COMPONEANT/REPORT/report/report.component';
import { ReportingComponent } from './COMPONEANT/REPORTING/reporting/reporting.component';
import { UserComponent } from './COMPONEANT/USER/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},  
  {path:'People',component:UserComponent},
  {path:'report',component:ReportComponent},
  {path:'reporting',component:ReportingComponent},
  {path:'failureinfra',component:FailureInfraComponent},
  {path:'monitorimfra',component:MonitorInfraComponent},
  {path:'failover',component:FailoverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
