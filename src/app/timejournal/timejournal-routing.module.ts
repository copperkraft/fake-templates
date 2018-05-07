import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimejournalComponent } from './timejournal.component';

const routes: Routes = [
  {
    path: '',
    component: TimejournalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimejournalRoutingModule {}


