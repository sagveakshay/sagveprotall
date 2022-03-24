import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){

  }
  title = 'test';

  
  getAlert(){
    alert("hello world");
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

  // birthday= new Date();
  // upper="hello angular";
  // lower="HELLO ANGULAR";
  // a: number = 663499;
  // pi: number = 3.14159265359;
  // b: number = 441;
}
