export abstract class BaseRepository<T extends { id: string }> {
  protected readonly store = new Map<string, T>();

  async create(entity: T): Promise<void> {
    this.store.set(entity.id, entity);
  }

  async findOne(id: string): Promise<T | undefined> {
    return this.store.get(id);
  }

  async findAll(): Promise<T[]> {
    return [...this.store.values()];
  }

  async delete(id: string): Promise<void> {
    this.store.delete(id);
  }
}
