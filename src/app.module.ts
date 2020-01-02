import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { DatabaseModule } from './modules/database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import configurations from './config/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configurations] }),
    UsersModule,
    AuthModule,
    SharedModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
