import { ConstantEntity } from '../../entity/sequelize';
import { User } from '../../entity/sequelize';

export const usersProviders = [
  {
    provide: ConstantEntity.USER_REPOSITORY,
    useValue: User,
  },
];
