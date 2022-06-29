import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './components/area/area.component';
import { ThingModule } from '../thing/thing.module';


@NgModule({
  declarations: [
    AreaComponent,
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    ThingModule,
  ],
  exports: [
    AreaComponent,
  ],
})
export class AreaModule { }
