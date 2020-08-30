import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPassComponent } from './forgot-pass.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: ForgotPassComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    ForgotPassComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ForgotPassModule { }
