import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy load
import { ComponentsComponent } from './components.component';

// const routes: Routes = [];

// Lazy load
const routes: Routes = [
  { path: '', component: ComponentsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
