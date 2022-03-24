import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceService } from './api/service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpModule } from './emp/emp.module';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { SignPageComponent } from './user/sign-page/sign-page.component';
import { UserModule } from './user/user.module';
import { ViewInfoComponent } from './user/view-info/view-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmpModule,


    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
