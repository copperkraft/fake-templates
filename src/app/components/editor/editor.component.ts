import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostData, PostService } from '../../services/post/post.service';
import { Location } from '@angular/common';
import { Post } from '../../classes/post';
import 'rxjs/add/operator/switchMap';
import {Tag} from '../../classes/tag';
import {TagService} from '../../services/tag/tag.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  isEdit = false;
  private postId: number;
  post: PostData;
  tags: Tag[];

  constructor(
    private postService: PostService,
    private tagService: TagService,
    private route: ActivatedRoute
  ) {}

  addPost() {
    this.postService.addPost(this.post);
  }

  addTag(name: string) {
    this.tagService.addTag(name)
      .then(this.loadTags.bind(this));
  }

  setPost() {
    this.postService.setPost(this.postId, this.post);
  }

  loadTags() {
    this.tagService.getTags().then(tags => {
      this.tags = tags;
    });
  }

  ngOnInit() {
    this.loadTags();
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.postId = +params.get('id');
        if (this.postId) {
          this.isEdit = true;
          return this.postService.getPostById(this.postId);
        }
        return Promise.resolve({
          title: '',
          description: '',
          tags: []
        });
      })
      .subscribe(post => {
        this.post = post;
      });
  }
}
