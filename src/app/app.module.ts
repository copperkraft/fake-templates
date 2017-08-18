import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { SearchComponent } from './search/search.component';
import {RouterModule} from '@angular/router';
import {PostService} from './services/post/post.service';
import {TagService} from './services/tag/tag.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'edit/:id',
        component: EditorComponent
      },
      {
        path: 'create',
        component: EditorComponent
      },
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      }
    ]),
    HttpModule
  ],
  providers: [PostService, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
