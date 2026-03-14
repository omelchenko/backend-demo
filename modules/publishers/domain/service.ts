import { PublisherEntity } from './entity';
import { PublisherRepository } from './repository';
import type { Publisher, CreatePublisherCommand, GetPublisherCommand } from './types';

export class PublisherService {
  private readonly repo: PublisherRepository;

  constructor() {
    this.repo = new PublisherRepository();
  }

  async create(cmd: CreatePublisherCommand): Promise<Publisher> {
    const entity = new PublisherEntity({
      id: crypto.randomUUID(),
      ...cmd,
    });
    await this.repo.create(entity);
    return entity;
  }

  async getOne(cmd: GetPublisherCommand): Promise<Publisher> {
    const entity = await this.repo.findOne(cmd.id);
    if (!entity) {
      throw new Error(`Publisher not found: ${cmd.id}`);
    }
    return entity;
  }

  async findAll(): Promise<Publisher[]> {
    return this.repo.findAll();
  }
}
