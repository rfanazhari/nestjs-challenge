import { Event } from '../../entity/sequelize';
import { ConstantEntity } from '../../entity/sequelize';

export const eventsProviders = [
  {
    provide: ConstantEntity.EVENT_REPOSITORY,
    useValue: Event,
  },
];
