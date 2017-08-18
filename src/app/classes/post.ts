import {Tag} from './tag';

export class Post {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  tags: Tag[];
}
