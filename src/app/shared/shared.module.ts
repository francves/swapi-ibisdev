import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BtnBackComponent } from './components/btn-back/btn-back.component';



@NgModule({
  declarations: [
    BtnBackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    BtnBackComponent
  ]
})
export class SharedModule { }
