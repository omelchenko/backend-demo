export interface Publisher {
  id: string;
  name: string;
  country: string;
}

export type CreatePublisherCommand = Omit<Publisher, 'id'>;

export type GetPublisherCommand = Pick<Publisher, 'id'>;
