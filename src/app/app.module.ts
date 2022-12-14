import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon'
import{MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './COMPONEANT/NAVBAR/navbar/navbar.component';
import { ReportingComponent } from './COMPONEANT/REPORTING/reporting/reporting.component';
import { UserComponent } from './COMPONEANT/USER/user/user.component';
import { ReportComponent } from './COMPONEANT/REPORT/report/report.component';
import { HomeComponent } from './COMPONEANT/HOME/home/home.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MonitorInfraComponent } from './COMPONEANT/monitor-infra/monitor-infra.component';
import { FailureInfraComponent } from './COMPONEANT/failure-infra/failure-infra.component';
import { FooterComponent } from './COMPONEANT/footer/footer.component';
import { SidenavComponent } from './COMPONEANT/sidenav/sidenav.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
// import{MatDrawerContainer} from '@angular/material/'
import {MatSidenavModule} from '@angular/material/sidenav';
import { FailoverComponent } from './COMPONEANT/failover/failover.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReportingComponent,
    UserComponent,
    ReportComponent,
    HomeComponent,
    MonitorInfraComponent,
    FailureInfraComponent,
    FooterComponent,
    SidenavComponent,
    FailoverComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    NgScrollbarModule,
    MatSidenavModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
