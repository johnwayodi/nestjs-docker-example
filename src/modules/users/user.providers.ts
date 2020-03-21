import { User } from './entities/user.entity';
import { UserProfile } from './entities/profile.entity';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
  {
    provide: 'PROFILE_REPOSITORY',
    useValue: UserProfile,
  },
];
