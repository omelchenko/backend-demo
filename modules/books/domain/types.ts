export interface Book {
  id: string;
  title: string;
  publisherId: string;
  year: number;
}

export type CreateBookCommand = Omit<Book, 'id'>;

export type GetBookCommand = Pick<Book, 'id'>;
