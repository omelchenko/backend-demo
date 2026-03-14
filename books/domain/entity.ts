import type { Book } from './types';

export class BookEntity implements Book {
  id: string;
  title: string;
  publisherId: string;
  year: number;

  constructor(config: Book) {
    this.id = config.id;
    this.title = config.title;
    this.publisherId = config.publisherId;
    this.year = config.year;
  }
}
