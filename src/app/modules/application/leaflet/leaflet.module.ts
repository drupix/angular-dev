import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeafletComponent } from './leaflet.component';
import { LeafletRoutingModule } from './leaflet-routing.module';

// import { LeafletModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    LeafletRoutingModule,
    // ChartsModule,
  ],
  exports: [
    LeafletComponent
  ],
  declarations: [
    LeafletComponent
  ],
  providers: [
  ],
})
export class LeafletModule { }
