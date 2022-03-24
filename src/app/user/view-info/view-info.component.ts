import { Component, OnInit,  } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.css']
})
export class ViewInfoComponent implements OnInit {
  users: any;
  constructor() { }

  ngOnInit(): void {
    this.users = localStorage.getItem('userinfo');
    this.users = JSON.parse(this.users);
  }


  GetData() {
    debugger;
    this.users = localStorage.getItem('userinfo');
    this.users = JSON.parse(this.users);
  }

  deleteInfo(data: number) {
    debugger;
    // this.users = localStorage.getItem('userinfo');
    // this.users = JSON.parse(this.users);
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].value == data) {
        this.users.splice(i,0);
      }
      console.log(i)
      //   this.users.forEach((value: { id: any; },index: any)=>{
      //     if(value.id==data) this.users.splice(index,1);
      // });

    }
  }

}
