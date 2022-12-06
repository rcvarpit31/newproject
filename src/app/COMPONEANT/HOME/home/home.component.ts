import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('addItem', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      transition('void <=> *', animate('1s ease-in'))
    ]),
  ],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  itemss: { path: string; name: String }[] = [
    { path: '../../../../assets/img/device2.png', name: "Device & Places" },
    { path: '../../../../assets/img/pepole2.png', name: "People" },
    { path: '../../../../assets/img/file2.png', name: "Information Repositories" },
    { path: '../../../../assets/img/service2.png', name: "Application & Services " },
  ];




  // addItem(){  if(this.items.length > this.count){
  //           this.items.forEach(element => { this.itemList.push(element); 
  //             this.count++;
  //           });}
  //   }
  //   removeItem(){  if( this.count>0){
  //     this.items.forEach(element => { this.itemList.pop(); 
  //       this.count--;
  //     });}
  // }
  navigate(path: any) {
    console.log(path);
    
    //  this.router.navigate([path])
     if(path == "../../../../assets/img/device2.png"){
          this.router.navigate(['device'])
        }if(path === "../../../../assets/img/pepole2.png"){
          this.router.navigate(['People'])
        }
        if(path === "../../../../assets/img/service2.png"){
          this.router.navigate(['monitorimfra'])
        }
        if(path === "'../../../../assets/img/file2.png',"){
          this.router.navigate(['file'])
        }


  }
  // navigate(path: string) {
  //   console.log(path);

  //   if(path == "../../../../assets/img/device2.png"){
  //     this.router.navigate(['device'])
  //   }if(path === "../../../../assets/img/pepole2.png"){

  //     this.router.navigate(['user'])
  //   }
  //   if(path === "../../../../assets/img/service2.png"){
  //     this.router.navigate(['failureinfra'])
  //   }
  //   if(path === "'../../../../assets/img/file2.png',"){
  //     this.router.navigate(['file'])
  //   }



  // }

}
