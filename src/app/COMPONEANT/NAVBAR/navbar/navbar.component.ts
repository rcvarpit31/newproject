import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  @Input()
  deviceXs!: boolean;
  navigate(path: string) {
    this.router.navigate([path])
    console.log(path);


  }


}
