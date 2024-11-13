import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LoginComponent} from './components/login/login.component';
import {AdmminTemplateComponent} from './admmin-template/admmin-template.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path : 'admin' , component : AdmminTemplateComponent,children : [
      {path: 'home', component: HomeComponent},
      {path : 'profile', component : ProfileComponent},
    ]}
];
