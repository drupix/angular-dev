import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lazy load
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ],
  // exports: [
  //   ContactComponent
  // ],
})
export class ContactModule { }
