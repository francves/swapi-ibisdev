import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    StarshipsListComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    MaterialModule
  ]
})
export class StarshipsModule { }
