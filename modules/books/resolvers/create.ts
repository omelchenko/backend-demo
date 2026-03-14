import { BookService } from '../domain';
import type { CreateBookCommand, Book } from '../domain';

const createBook = async ({ payload }: { payload: CreateBookCommand }): Promise<Book> => {
  const service = new BookService();
  const book = await service.create(payload);
  console.info('Book created', book);
  return book;
};

export default createBook;
