import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { EmpinfoComponent } from './empinfo/empinfo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:'crud',
    component:CrudComponent
  },
  {
    path:'empinfo',
    component:EmpinfoComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }
