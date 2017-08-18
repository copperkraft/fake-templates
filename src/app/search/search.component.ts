import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {PostService} from '../services/post/post.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts: Post[];
  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.getPosts().then(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
