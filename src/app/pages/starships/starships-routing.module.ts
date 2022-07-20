import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsDetailComponent } from './starships-detail/starships-detail.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';

const routes: Routes = [
  { path: '', component: StarshipsListComponent },
  { path: 'detail', component: StarshipsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
