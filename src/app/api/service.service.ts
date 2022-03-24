import { Injectable } from '@angular/core';
import { Init } from '../init-user';



@Injectable({
  providedIn: 'root'
})


export class ServiceService  {
  users:any;
  
  constructor() {

  }
  getToken(){
    // debugger;
    return !!localStorage.getItem("user");
  }

   
}



