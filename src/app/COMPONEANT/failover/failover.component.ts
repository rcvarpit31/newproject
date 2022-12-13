import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VamanitapiService } from 'src/app/SERVICE/vamanitapi.service';

@Component({
  selector: 'app-failover',
  templateUrl: './failover.component.html',
  styleUrls: ['./failover.component.css']
})
export class FailoverComponent implements OnInit {


public response:any;
  constructor(private router:Router,private vamanitapi:VamanitapiService) {
    // this.getResponse();
   }

  ngOnInit(): void {
  }
  ///////////////////  navigate one page to onther page//////////////////
  navigate(path:string){
    this.router.navigate([path]);
  }
  ////////////// call vamanitapi for get response //////////////////////////
  public getResponse(){
    this.vamanitapi.getResponseFromApi().subscribe(data=>{
      this.response =data;
      console.log(data);
      
    }, error=>{this.response=error})
  }
}
