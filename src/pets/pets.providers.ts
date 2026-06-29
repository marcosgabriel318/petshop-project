import { DataSource } from 'typeorm';
import { Pets } from './pets.entity';

export const petsProvider = [
  {
    provide: 'PETS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pets),
    inject: ['DATA_SOURCE'],
  },
];