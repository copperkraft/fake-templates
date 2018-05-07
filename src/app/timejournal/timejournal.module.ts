import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimejournalComponent } from './timejournal.component';
import {TimejournalRoutingModule} from './timejournal-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReportFormComponent } from './report-form/report-form.component';

@NgModule({
  imports: [
    CommonModule,
    TimejournalRoutingModule
  ],
  declarations: [
    TimejournalComponent,
    SidebarComponent,
    ReportFormComponent
  ]
})
export class TimejournalModule { }
