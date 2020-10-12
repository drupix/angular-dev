import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy load
import { ServicesComponent } from './services.component';

// const routes: Routes = [];

// Lazy load
const routes: Routes = [
  { path: '', component: ServicesComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
