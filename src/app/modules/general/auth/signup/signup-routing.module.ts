import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy load
import { SignupComponent } from './signup.component';

//const routes: Routes = [];

// Lazy load
const routes: Routes = [
  { path: '', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
