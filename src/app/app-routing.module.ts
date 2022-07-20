import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'starships', pathMatch: 'full' },
  { path: 'starships', loadChildren: () => import('./pages/starships/starships.module').then(m => m.StarshipsModule) },
  { path: 'pilots', loadChildren: () => import('./pages/pilots/pilots.module').then(m => m.PilotsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
