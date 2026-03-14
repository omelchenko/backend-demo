import { PublisherService } from '../domain';
import type { GetPublisherCommand, Publisher } from '../domain';

const getPublisher = async ({ payload }: { payload: GetPublisherCommand }): Promise<Publisher> => {
  const service = new PublisherService();
  const publisher = await service.getOne(payload);
  console.info('Publisher fetched', publisher);
  return publisher;
};

export default getPublisher;
