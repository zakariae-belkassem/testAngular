import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LoginComponent} from './components/login/login.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path : 'profile', component : ProfileComponent},
  {path: 'login', component: LoginComponent}
];
