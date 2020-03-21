import { Sequelize } from 'sequelize-typescript';

import { env } from '../../config/environment';
import { User } from '../users/entities/user.entity';
import { UserProfile } from '../users/entities/profile.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: env.DB_HOST,
        port: parseInt(env.DB_PORT, 10),
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
        logging: false,
      });
      sequelize.addModels([User, UserProfile]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
