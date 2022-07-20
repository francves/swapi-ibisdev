import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotsDetailComponent } from './pilots-detail/pilots-detail.component';

const routes: Routes = [
  { path: 'detail', component: PilotsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotsRoutingModule { }
