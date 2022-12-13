import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/SERVICE/employee.service';

@Component({
  selector: 'app-failure-infra',
  templateUrl: './failure-infra.component.html',
  styleUrls: ['./failure-infra.component.css']
})
export class FailureInfraComponent implements OnInit {

  constructor(private service: EmployeeService, private router: Router) {
    this.getAlldataFromFailOverInfra();
    this.getDataFromFailoverInfraTask();
  }

  ngOnInit(): void {
  }

  failoverInfradata: any;
  failoverInfrTask: any;
  status = '';
  //////////////////////////////// get data from failover infra data sets////////////////////////////////////////
  public getAlldataFromFailOverInfra() {
    this.service.getFailOverInfra().subscribe(data => {
      this.failoverInfradata = data;
      console.log("this is dta failoverinfara:-"+ this.failoverInfradata);
    }, error => {
      return this.failoverInfradata = error;
    }
    )
    setTimeout(() => {
      this.getAlldataFromFailOverInfra()
    }, 5000);
  }
  /////////////////////////////// get data from failoverinfaratask ///////////////////////////////////////
  public getDataFromFailoverInfraTask() {
    this.service.getDataFromFailoverInfraTask().subscribe(data => { 
      this.failoverInfrTask = data.reverse()    
     },
      error => { this.failoverInfrTask = error }
      );
      setTimeout(() => {
        this.getAlldataFromFailOverInfra()
      }, 5000);
      
  }

////////////////////////  Refresh data fromFailoverinfraTask/////////////////////////////////////
  public refresh() {
    this.getAlldataFromFailOverInfra()
  }
 /////////////////////////////// get css class dynamicly way /////////////////////////
  cssClass: any;
  // get dynamic css
  getClassOf(helth: string) {
    if (helth.toLowerCase() === 'ok' || helth.toLowerCase() === 'success') {
      this.cssClass = 'success'
      return 'success';
    } else if (helth.toLowerCase() === 'warning') {
      this.cssClass = 'warn'
      return 'warn';
    } else {
      return 'error'
    }
  }

  //////////////////////////////// navaigate one path to onther path //////////////////////////////
  navigate(path: string) {
    this.router.navigate([path]);
  }
  // get data from failoverinfratask 

}

