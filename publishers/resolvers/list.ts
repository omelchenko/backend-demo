import { PublisherService } from '../domain';
import type { Publisher } from '../domain';

const listPublishers = async (): Promise<Publisher[]> => {
  const service = new PublisherService();
  const publishers = await service.findAll();
  console.info('Publishers list fetched', publishers.length);
  return publishers;
};

export default listPublishers;
