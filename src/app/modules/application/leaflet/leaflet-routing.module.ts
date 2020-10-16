import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy load
import { LeafletComponent } from './leaflet.component';

const routes: Routes = [
  { path: '', component: LeafletComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeafletRoutingModule { }
