import { Injectable } from '@angular/core';
import {Post} from '../../classes/post';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> {
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
      .then(response => response.json().data as Post);
  }
}
