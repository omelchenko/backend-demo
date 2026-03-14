import { BookEntity } from './entity';
import { BookRepository } from './repository';
import { PublisherService } from '../../publishers/domain/service';
import type { Book, CreateBookCommand, GetBookCommand } from './types';

export class BookService {
  private readonly repo: BookRepository;
  private readonly publisherService: PublisherService;

  constructor() {
    this.repo = new BookRepository();
    this.publisherService = new PublisherService();
  }

  async create(cmd: CreateBookCommand): Promise<Book> {
    await this.publisherService.getOne({ id: cmd.publisherId });

    const entity = new BookEntity({
      id: crypto.randomUUID(),
      ...cmd,
    });
    await this.repo.create(entity);
    return entity;
  }

  async getOne(cmd: GetBookCommand): Promise<Book> {
    const entity = await this.repo.findOne(cmd.id);
    if (!entity) {
      throw new Error(`Book not found: ${cmd.id}`);
    }
    return entity;
  }

  async findAll(): Promise<Book[]> {
    return this.repo.findAll();
  }

  async findByPublisher(publisherId: string): Promise<Book[]> {
    const all = await this.repo.findAll();
    return all.filter((book) => book.publisherId === publisherId);
  }
}
