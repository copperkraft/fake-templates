import { Injectable } from '@angular/core';
import {Tag} from '../../classes/tag';
import {Http} from '@angular/http';

@Injectable()
export class TagService {
  constructor(private http: Http) { }

  getTags(): Promise<Tag[]> {
    return this.http.get(`/api/tags`)
      .toPromise()
      .then(response => {
        return response.json() as Tag[];
      });
  }

  addTag(name): Promise<Tag[]> {
    return this.http.post(`/api/tags`, name)
      .toPromise()
      .then(response => {
        return response.json() as Tag[];
      });
  }
}
