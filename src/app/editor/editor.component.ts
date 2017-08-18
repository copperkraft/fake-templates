import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../services/post/post.service';
import { Location } from '@angular/common';
import { Post } from '../classes/post';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  private isEdit: boolean;
  postId: number;
  private post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.postId = +params.get('id');
        return this.postService.getPostById(this.postId);
      })
      .subscribe(post => this.post = post);
  }
}
