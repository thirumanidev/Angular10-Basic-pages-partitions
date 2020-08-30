import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPassComponent } from './reset-pass.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: ResetPassComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    ResetPassComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ResetPassModule { }
