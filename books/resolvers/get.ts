import { BookService } from '../domain';
import type { GetBookCommand, Book } from '../domain';

const getBook = async ({ payload }: { payload: GetBookCommand }): Promise<Book> => {
  const service = new BookService();
  const book = await service.getOne(payload);
  console.info('Book fetched', book);
  return book;
};

export default getBook;
