import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lazy load
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent
  ],
  // exports: [
  //   AboutComponent
  // ],
})
export class AboutModule { }
