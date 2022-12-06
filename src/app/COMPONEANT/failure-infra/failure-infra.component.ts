import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/SERVICE/employee.service';

@Component({
  selector: 'app-failure-infra',
  templateUrl: './failure-infra.component.html',
  styleUrls: ['./failure-infra.component.css']
})
export class FailureInfraComponent implements OnInit {

  constructor(private service:EmployeeService) { 
    this.getAlldataFromFailOverInfra();
  }

  ngOnInit(): void {
  }
 
  failoverInfradata:any;
  status ='';
 // get data from failover infra datasets
  public getAlldataFromFailOverInfra() {
    this.service.getAllMonitorInfra().subscribe(data => {
      this.failoverInfradata = data;
      // console.log(  "this is monitor:-"+ this.monitorInfradata[0]);
    }, error => {
      return this.failoverInfradata= error;
    }
    )

  }
}
