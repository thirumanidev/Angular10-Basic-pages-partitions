import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: '', loadChildren: ()=> import('./pages/home/home.module').then(m=>m.HomeModule) },
      { path: 'signin', loadChildren: ()=> import('./pages/signin/signin.module').then(m=>m.SigninModule)},
      { path: 'signup', loadChildren: ()=> import('./pages/signup/signup.module').then(m=>m.SignupModule)},
      { path: 'forgot-pass', loadChildren: ()=> import('./pages/forgot-pass/forgot-pass.module').then(m=>m.ForgotPassModule)},
      { path: 'reset-pass', loadChildren: ()=> import('./pages/reset-pass/reset-pass.module').then(m=>m.ResetPassModule)},
      { path: 'contact-us', loadChildren: ()=> import('./pages/contact-us/contact-us.module').then(m=>m.ContactUsModule)}
    ]
  },
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
  // useHash: true
});