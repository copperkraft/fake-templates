import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostData, PostService } from '../services/post/post.service';
import { Post } from '../classes/post';
import 'rxjs/add/operator/switchMap';
import {Tag} from '../classes/tag';
import {TagService} from '../services/tag/tag.service';

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  addPost() {
    this.postService.addPost(this.post).then(post =>
      this.router.navigate(['/edit/' + post.id])
    );
  }

  addTag(name: string) {
    if (name) {
      this.tagService.addTag(name)
        .then(this.loadTags.bind(this));
    }
  }

  setPost() {
    this.postService.setPost(this.postId, this.post);
  }

  loadTags() {
    this.tagService.getTags().then(tags => {
      this.tags = tags;
    });
  }

  isValidPost() {
    return this.post.tags.length && this.post.description && this.post.title;
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
        return Promise.resolve(new Post());
      })
      .subscribe(post => {
        this.post = post;
      });
  }
}
