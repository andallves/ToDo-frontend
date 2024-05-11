import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./features/sign-up/sign-up.module').then(m => m.SignUpModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule),
  },
];
