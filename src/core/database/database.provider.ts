import { ServerConfig } from '../../../config';
import { Sequelize } from 'sequelize-typescript';
import { Event, User } from '../presistences/entity/sequelize';
import { DatabaseConfig } from './database.config';

export const databaseProvider = [
  {
    provide: ServerConfig.SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (ServerConfig.NODE_ENV) {
        case ServerConfig.DEVELOPMENT:
          config = DatabaseConfig.development;
          break;
        case ServerConfig.PRODUCTION:
          config = DatabaseConfig.production;
          break;
        default:
          config = DatabaseConfig.development;
      }

      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Event]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
