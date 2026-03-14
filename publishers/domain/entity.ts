import type { Publisher } from './types';

export class PublisherEntity implements Publisher {
  id: string;
  name: string;
  country: string;

  constructor(config: Publisher) {
    this.id = config.id;
    this.name = config.name;
    this.country = config.country;
  }
}
