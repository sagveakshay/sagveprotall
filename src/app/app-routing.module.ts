import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './api/auth.guard';
import { ServiceService } from './api/service.service';
import { AppComponent } from './app.component';
import { AddUserComponent } from './user/add-user/add-user.component';

import { LoginPageComponent } from './user/login-page/login-page.component';
import { PagenotfoundComponent } from './user/pagenotfound/pagenotfound.component';
import { SignPageComponent } from './user/sign-page/sign-page.component';
import { ViewInfoComponent } from './user/view-info/view-info.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'sign',
    component: SignPageComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'view',
    component: ViewInfoComponent
  },
  {
    path:'user',
    component:AddUserComponent
  },
  {
    path:'emp',
    loadChildren: () => import('./emp/emp.module').then(m => m.EmpModule)
  },
  {
    path: '**',
    component: PagenotfoundComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers:[ServiceService]
})
export class AppRoutingModule { }
