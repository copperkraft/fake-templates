import { Injectable } from '@angular/core';
import {Post} from '../../classes/post';
import 'rxjs/add/operator/toPromise';
import {Tag} from '../../classes/tag';
import { HttpClient } from '@angular/common/http';

export interface PostData {
  title: string;
  description: string;
  tags: Tag[];
}

interface PagedResponse {
  pageCount: number;
  data: any[];
}

const urlAssembler = (base: string, params: {name: string, value: any}[]) => {
  return base + '?' +
    params
    .filter(param => param.value !== undefined && param.value !== null)
    .map(param => `${param.name}=${encodeURI(param.value)}`)
    .join('&');
};

@Injectable()
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts(
    tags: Tag[],
    pagination: {
      page: number,
      pageSize?: number
    },
    filters?: {
      minDate?: Date,
      maxDate?: Date
    }
  ): Promise<{pageCount: number, posts: Post[]}> {
    const url = urlAssembler('/api/posts', [
      {
        name: 'page',
        value: pagination.page
      },
      {
        name: 'pageSize',
        value: pagination.pageSize
      },
      {
        name: 'minDate',
        value: filters.minDate
      },
      {
        name: 'maxDate',
        value: filters.maxDate
      },
      ...tags.map(tag => ({
        name: 'tag',
        value: tag.id
      }))
    ]);

    return this.http.get<PagedResponse>(url)
      .toPromise()
      .then(response => ({
        pageCount: response.pageCount,
        posts: response.data as Post[]
      }));
  }

  getPostById(id: number): Promise<Post> {
    id = id || 1;
    return this.http.get<Post>(`/api/posts/${id}`)
      .toPromise();
  }

  addPost(post: PostData): Promise<Post> {
    return this.http.post<Post>(`/api/posts`, JSON.stringify(post))
      .toPromise();
  }

  setPost(id: number, post: PostData): Promise<Post> {
    return this.http.put<Post>(`/api/posts/${id}`, JSON.stringify(post))
      .toPromise();
  }
}
