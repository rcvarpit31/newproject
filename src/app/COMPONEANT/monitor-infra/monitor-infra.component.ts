import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/SERVICE/employee.service';

@Component({
  selector: 'app-monitor-infra',
  templateUrl: './monitor-infra.component.html',
  styleUrls: ['./monitor-infra.component.css']
})
export class MonitorInfraComponent implements OnInit {
  showFiller = true; 


  constructor(private service: EmployeeService,private router :Router) {
    this.getAlldataFromMonitorInfra();
    console.log("this monitopr");

  }
  monitorInfradata: any;
  ngOnInit(): void {
  }


  // get  data from data MonitorInfra 
  public getAlldataFromMonitorInfra() {
    this.service.getAllMonitorInfra().subscribe(data => {
      this.monitorInfradata = data;
      // console.log(  "this is monitor:-"+ this.monitorInfradata[0]);
    }, error => {
      return this.getAlldataFromMonitorInfra = error
    }
    )
    setTimeout(() => {
      this.getAlldataFromMonitorInfra()
    }, 5000);
  }

public refresh (){
   this.getAlldataFromMonitorInfra(); 
}
// get dynamic css
getClassOf(helth:string) {
  if (helth.toLowerCase() ==='ok'||helth.toLowerCase() === 'success') {
    return 'success';
  } else if (helth.toLowerCase()==='warning') {
    return 'warn';
  } else {
    return 'error'
  }
}

navigate(path:string){
  this.router.navigate([path]);
}

}


