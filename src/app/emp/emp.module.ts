import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpRoutingModule } from './emp-routing.module';
import { EmpinfoComponent } from './empinfo/empinfo.component';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    EmpinfoComponent,
    CrudComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    EmpRoutingModule
  ]
})
export class EmpModule { }
