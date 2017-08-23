import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor-routing.module';
import { AddTagComponent } from './components/add-tag/add-tag.component';

@NgModule({
  imports: [
    SharedModule,
    EditorRoutingModule
  ],
  declarations: [
    EditorComponent,
    AddTagComponent
  ]
})
export class EditorModule { }
