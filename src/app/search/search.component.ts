import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {PostService} from '../services/post/post.service';
import {Post} from '../classes/post';
import {Tag} from '../classes/tag';
import {TagService} from '../services/tag/tag.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  tags: Tag[];
  posts: Post[];
  selectedTags: Tag[] = [];
  page = 0;
  pageCount = 0;
  pageSize = 2;
  minDate: Date;
  maxDate: Date;

  loadTags() {
    this.tagService.getTags().then(tags => {
      this.tags = tags;
    });
  }

  loadPosts() {
    this.postService.getPosts(
      this.selectedTags,
      {
        page: this.page,
        pageSize: this.pageSize
      },
      {
        minDate: this.minDate,
        maxDate: this.maxDate
      })
      .then(data => {
      this.posts = data.posts;
      this.pageCount = data.pageCount;
    });
  }

  selectedTagsChange(tags: Tag[]) {
    this.selectedTags = tags;
    this.page = 0;
    this.loadPosts();
  }

  minDateChange(date: Date) {
    this.minDate = date;
    this.page = 0;
    this.loadPosts();
  }

  maxDateChange(date: Date) {
    this.maxDate = date;
    this.page = 0;
    this.loadPosts();
  }

  pageChange(page: number) {
    this.page = page;
    this.loadPosts();
  }

  constructor(
    private postService: PostService,
    private tagService: TagService
  ) {}

  ngOnInit() {
    this.loadTags();
    this.loadPosts();
  }
}
