import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { UtilitiesComponent } from './utilities.component';
import { ColorComponent } from './color/color.component';


@NgModule({
  declarations: [
    UtilitiesComponent,
    ColorComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
