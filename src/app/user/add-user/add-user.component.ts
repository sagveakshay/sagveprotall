import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { City } from './City';
import {Country} from './country';
import { State } from './state';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  countries!: Country[];
  states!: State[];
  city!:City[];
  constructor() { }  
 
  ngOnInit(): void {
    this.countries = this.getCountries();
  }
  // getCountries() {
  //   return [
  //    new Country(1, 'USA' ),
  //    new Country(2, 'Brazil' ),
  //   ];
  // }
  onSelect(e:any) {
    this.states = this.getStates()
      .filter((item) => item.countryid == e.target.value);
  }
  Select(e:any){
    this.city= this.getCity().filter((item)=>item.stateid == e.target.value)
  }
  getCountries() {
    return [
     new Country(1, 'India' ),
     new Country(2, 'USA' ),
     new Country(3,'UK')
    ];
  }

  onSubmit(){
    console.log()
  }

  getStates() {
    return [
      new State(1, 1, 'Maharasthra' ),
      new State(2, 1, 'Delhi' ),
      new State(3, 2, 'California'),
      new State(4, 2, 'New York'),
      new State(5, 3, 'England' ),
      new State(6, 3, 'Wales'),
     ];
   }

   getCity(){
     return[
       new City(1,1,'Kolhapur'),
       new City(2,1,'Satara'),
       new City(3,1,'Pune'),
       new City(4,2,'Firozabad'),
       new City(5,2,'Shergarh'),
       new City(6,3,'Los Andeles'),
       new City(7,3,'San Diego'),
       new City(8,4,'Buffalo'),
       new City(9,4,'Rochester'),
       new City(10,5,'liverpool'),
       new City(11,5,'Manchester'),
       new City(12,6,'Bangor'),
       new City(13,6,'St Davids'),

     ]
   }
    
}
