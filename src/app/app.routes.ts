import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login - Lista de afazeres',
  },
  {
    path: 'cadastro',
    component: SignUpComponent,
    title: 'Cadastro - Lista de afazeres',
  },
  {
    path: '',
    component: HomeComponent,
  },
];
