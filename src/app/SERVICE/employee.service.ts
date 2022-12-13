import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModule } from '../MODEL/employee/employee.module';
import { MonitorinfraModule } from '../MODEL/monitorinfra/monitorinfra.module';
const baseUrl = 'http://192.168.100.47:9031/api/employee';
const baseUrl2 = 'http://192.168.100.47:9031/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {  
  constructor(private http: HttpClient) { }
 // retrive all data from database
  public getAll(): Observable<EmployeeModule[]> {
   
    return this.http.get<EmployeeModule[]>(baseUrl);
  }

// retrive one data from database
  public getOne(id: any): Observable<EmployeeModule> {

    return this.http.get(`${baseUrl}/${id}`);
  }

  // save new data 
  public createEmployee(emplmodel:EmployeeModule): Observable<any> {
    console.log("this is service data"+emplmodel);
    let headers = new HttpHeaders();
   headers = headers.set('Content-Type', 'application/json');
    
    return this.http.post(baseUrl, emplmodel,{headers:headers});

  }
  // if update data
  public updateEmployee(id: any, data: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.put(`${baseUrl}/{id}`, data,{headers:headers});
  }
  // delet one record through id
  public deleteOne(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  // delet all record
  public deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
 // get data from monitorinfra
 public getAllMonitorInfra(): Observable<MonitorinfraModule[]>{
  return this.http.get<MonitorinfraModule[]>(baseUrl2+"/monitorinfra/monitor");

 }
 // get data from failOverinfra
 public getFailOverInfra():Observable<any>{
  return this.http.get<MonitorinfraModule>(baseUrl2+"/failoverinfra/fail");

 }

 // get data from failoverInfratask failoverinfraTask {controller}
 public getDataFromFailoverInfraTask():Observable<any>{
  return this.http.get<MonitorinfraModule>(baseUrl2+"/failoverinfrataks/infratask");
 }


}
// arpitsingh@thinkcloud.in