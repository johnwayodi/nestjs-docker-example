import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { DatabaseModule } from './modules/database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RegisterMiddleware } from './modules/auth/middleware/register.middleware';
import { LoginMiddleware } from './modules/auth/middleware/login.middleware';

@Module({
  imports: [UsersModule, AuthModule, SharedModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RegisterMiddleware)
      .forRoutes('/auth/register')
      .apply(LoginMiddleware)
      .forRoutes('/auth/login');
  }
}
