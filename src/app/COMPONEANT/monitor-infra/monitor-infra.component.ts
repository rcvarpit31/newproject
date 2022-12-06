import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/SERVICE/employee.service';

@Component({
  selector: 'app-monitor-infra',
  templateUrl: './monitor-infra.component.html',
  styleUrls: ['./monitor-infra.component.css']
})
export class MonitorInfraComponent implements OnInit {

  constructor(private service: EmployeeService) { 
    this.getAlldataFromMonitorInfra();
    console.log("this monitopr");
    
  }
  monitorInfradata: any;
  ngOnInit(): void {
  }
  // // get data from data base
  // public getAllEmployeeData() {
  //   this.service.getAll().subscribe(data => {
  //     this.employeeData = data
  //     // console.log(data);
  //   },
  //     error => { return this.employeeData = error })
  // }
  // get  data from data MonitorInfra 
  public getAlldataFromMonitorInfra() {
    this.service.getAllMonitorInfra().subscribe(data => {
      this.monitorInfradata = data;
      // console.log(  "this is monitor:-"+ this.monitorInfradata[0]);
    }, error => {
      return this.getAlldataFromMonitorInfra = error
    }
    )

  }
}
