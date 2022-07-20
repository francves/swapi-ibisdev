import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { StarshipsDetailComponent } from './starships-detail/starships-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StarshipsListComponent,
    StarshipsDetailComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class StarshipsModule { }
