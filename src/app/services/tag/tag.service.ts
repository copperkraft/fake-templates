import { Injectable } from '@angular/core';
import {Tag, tagsExamples} from '../../models/tag';

@Injectable()
export class TagService {
  constructor() { }

  getTags(): Promise<Tag[]> {
    return new Promise(resolve => resolve(tagsExamples));
  }
}
