import { Module } from '@nestjs/common';

import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { usersProviders } from './user.providers';
import { SharedModule } from '../shared/shared.module';
import { ProfileService } from './services/profile.service';

@Module({
  imports: [SharedModule],
  controllers: [UserController],
  providers: [UserService, ProfileService, ...usersProviders],
  exports: [UserService, ProfileService],
})
export class UsersModule {}
