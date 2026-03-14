import { BookService } from '../domain';
import type { Book } from '../domain';

const listBooks = async (): Promise<Book[]> => {
  const service = new BookService();
  const books = await service.findAll();
  console.info('Books list fetched', books.length);
  return books;
};

export default listBooks;
