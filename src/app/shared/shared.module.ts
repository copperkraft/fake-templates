import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './tag-list/tag-list.component';
import { FormsModule } from '@angular/forms';

/* The SharedModule may re-export other widget modules, such as CommonModule,
FormsModule, and modules with the UI controls that you use most widely.*/

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TagListComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    TagListComponent
  ]
})
export class SharedModule { }
