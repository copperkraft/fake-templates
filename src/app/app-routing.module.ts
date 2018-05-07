import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'timejournal',
    pathMatch: 'full'
  },
  {
    path: 'timejournal',
    loadChildren: 'app/timejournal/timejournal.module#TimejournalModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
