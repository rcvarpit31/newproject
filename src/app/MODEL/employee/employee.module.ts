import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { 
  empcode ?: any;
  employeename?: String;
  email ?: String ;
  mobileno?: number;
  designation ?:String;
  reportinto ?: String ;
  reason ?: String;
  status ? : boolean;
}
