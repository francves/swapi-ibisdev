import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PilotsRoutingModule } from './pilots-routing.module';
import { PilotsDetailComponent } from './pilots-detail/pilots-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    PilotsDetailComponent
  ],
  imports: [
    CommonModule,
    PilotsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PilotsModule { }
