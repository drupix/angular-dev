import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy load
import { ItemsComponent } from './items.component';

// const routes: Routes = [];

// Lazy load
const routes: Routes = [
  { path: '', component: ItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
