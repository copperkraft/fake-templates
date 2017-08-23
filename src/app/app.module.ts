import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { PostService } from './services/post/post.service';
import { TagService } from './services/tag/tag.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PostService,
    TagService
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
