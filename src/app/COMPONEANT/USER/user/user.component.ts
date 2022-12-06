import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeModule } from 'src/app/MODEL/employee/employee.module';
import { EmployeeService } from 'src/app/SERVICE/employee.service';
// EmployeeModule

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // empGroup = new FormGroup ({});
  emplmodel: EmployeeModule;
  employeeData: any;
  constructor(private service: EmployeeService) {
    this.emplmodel = new EmployeeModule();
  }

  ngOnInit(): void {
    // this.createForm();
    this.getAllEmployeeData();
  }
  // Create new object of employee model
  // empcode: FormGroup<{}>| String ;

  // createForm(){
  empGroup = new FormGroup({
    empcode: new FormControl('', [Validators.required]),
    employeename: new FormControl('', [Validators.required]),
    mobileno: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    reportinto: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])

  });
  // }

  onSubmit(data: any) {
    console.log(data.value);
    const formdata = {
      empcode: data.value.empcode,
      employeename: data.value.employeename,
      mobileno: data.value.mobileno,
      designation: data.value.designation,
      email: data.value.email,
      reportinto: data.value.reporting,
      reason: data.value.reason,
      status: data.value.status
    }
    this.service.createEmployee(formdata).subscribe(data =>{
    this.getAllEmployeeData();
    console.log(data)}, err => console.error(err)
      
    )

  }
  // get data from data base
  public getAllEmployeeData() {
    this.service.getAll().subscribe(data => {
      this.employeeData = data
      console.log(data);
    },
      error => { return this.employeeData = error })
  }
  //  Delete data by id
  public deleteData(id: any) {
    this.service.deleteOne(id).subscribe(res => {
      console.log(res);
      // this.router.navigate(['/location']);
      console.log("delete button click" + id);
      this.getAllEmployeeData();
    }, err => {
      console.log(err);
    })
  }


}
