import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VamanitapiService {

  constructor(private http:HttpClient) {
   }
   ////////////////////////////////get Response from api////////////////////
   getResponseFromApi(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post('http://192.168.100.89:8000/testpwsh',{headers:headers});
   }
   
}
