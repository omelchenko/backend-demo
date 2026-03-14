import { PublisherService } from '../domain';
import type { CreatePublisherCommand, Publisher } from '../domain';

const createPublisher = async ({ payload }: { payload: CreatePublisherCommand }): Promise<Publisher> => {
  const service = new PublisherService();
  const publisher = await service.create(payload);
  console.info('Publisher created', publisher);
  return publisher;
};

export default createPublisher;
