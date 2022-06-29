import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThingRoutingModule } from './thing-routing.module';
import { ThingCardComponent } from './components/thing-card/thing-card.component';
import { ThingRowComponent } from './components/thing-row/thing-row.component';

@NgModule({
  declarations: [
    ThingCardComponent,
    ThingRowComponent,
  ],
  imports: [
    CommonModule,
    ThingRoutingModule,
  ],
  exports: [
    ThingCardComponent,
    ThingRowComponent,
  ],
})
export class ThingModule { }
