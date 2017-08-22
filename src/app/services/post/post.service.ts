import { Injectable } from '@angular/core';
import {Post} from '../../classes/post';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Tag} from '../../classes/tag';

export interface PostData {
  title: string;
  description: string;
  tags: Tag[];
}

@Injectable()
export class PostService {
  constructor(private http: Http) { }

  getPosts(tags: Tag[]): Promise<Post[]> {
    return this.http.get(`/api/posts`)
      .toPromise()
      .then(response => {
        return response.json() as Post[];
      });
  }

  getPostById(id: number): Promise<Post> {
    id = id || 1;
    return this.http.get(`/api/posts/${id}`)
      .toPromise()
      .then(response => response.json() as Post);
  }

  addPost(post: PostData): Promise<Post> {
    return this.http.post(`/api/posts`, JSON.stringify(post))
      .toPromise()
      .then(response => {
        return response.json() as Post;
      });
  }

  setPost(id: number, post: PostData): Promise<Post> {
    return this.http.put(`/api/posts/${id}`, JSON.stringify(post))
      .toPromise()
      .then(response => response.json() as Post);
  }
}
