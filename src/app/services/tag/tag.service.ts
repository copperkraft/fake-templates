import { Injectable } from '@angular/core';
import {Tag} from '../../classes/tag';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TagService {
  constructor(private http: HttpClient) { }

  getTags(): Promise<Tag[]> {
    return this.http.get<Tag[]>(`/api/tags`)
      .toPromise();
  }

  addTag(name: string): Promise<Tag[]> {
    return this.http.post<Tag[]>(`/api/tags`, name)
      .toPromise();
  }
}
