import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isTrue:boolean=true;
  isFalse :boolean=true;
  root:any;
  constructor( private router:Router) { 
    // this.navigate('');
  }

  ngOnInit(): void {
  }
navigate(path:string){
  this.router.navigate([path]);
  console.log(path);
  this.show(path);
  }
  
   show(path:string){
    if( path=='People'){
      this.isTrue = false ;
      this.isFalse =true ;
    }else{
      this.isTrue = true ;
      this.isFalse =false ;
   }

  }
}