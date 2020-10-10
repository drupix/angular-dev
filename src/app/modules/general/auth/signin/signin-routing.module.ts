import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy load
import { SigninComponent } from './signin.component';

// const routes: Routes = [];

// Lazy load
const routes: Routes = [
  { path: '', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
