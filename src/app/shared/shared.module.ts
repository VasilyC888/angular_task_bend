import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from './services/main.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    MainService,
  ]
})
export class SharedModule { }
