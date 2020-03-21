import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersModule } from './../users/users.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local-strategy';
import { JwtStrategy } from './strategies/jwt-strategy';
import { AuthController } from './controllers/auth.controller';
import { env } from '../../config/environment';

@Module({
  imports: [
    PassportModule,
    SharedModule,
    UsersModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: env.APP_SECRET,
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
