import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy load
import { AboutComponent } from './about.component';

// const routes: Routes = [];

// Lazy load
const routes: Routes = [
  { path: '', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
