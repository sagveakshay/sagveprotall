import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewInfoComponent } from './view-info/view-info.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewInfoComponent,
    PagenotfoundComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule

  ],
  exports:[
    ViewInfoComponent,
    PagenotfoundComponent,
    AddUserComponent
    
  ]
})
export class UserModule { }
