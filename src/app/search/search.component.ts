import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {PostService} from '../services/post/post.service';
import {Post} from '../classes/post';
import {Tag} from '../classes/tag';
import {TagService} from '../services/tag/tag.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts: Post[];
  tags: Tag[];
  constructor(
    private postService: PostService,
    private tagService: TagService
  ) {}

  ngOnInit() {
    this.postService.getPosts().then(posts => {
      this.posts = posts;
    });
    this.tagService.getTags().then(tags => {
      this.tags = tags;
    });
  }
}
