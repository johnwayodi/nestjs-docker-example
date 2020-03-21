import {
  Controller,
  Req,
  Body,
  Res,
  Post,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

import { AuthService } from '../services/auth.service';
import { ResponseService } from '../../shared/services/response.service';
import { ProfileService } from '../../users/services/profile.service';
import { LoginDto } from '../dtos/login-dto';
import { SignUpDto } from '../dtos/signup-dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly profileService: ProfileService,
    private readonly resService: ResponseService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request, @Res() res: Response) {
    const { user, accessToken } = await this.authService.loginUser(req.user);
    this.resService.sendResponse(res, HttpStatus.OK, 'login successful', {
      user,
      accessToken,
    });
  }

  @Post('register')
  async register(@Body() data: SignUpDto, @Res() res: Response) {
    const user = await this.authService.registerUser(data);
    const { firstName, lastName } = data;
    const profile = await this.profileService.create(user.id, {
      firstName,
      lastName,
    });
    this.resService.sendResponse(
      res,
      HttpStatus.CREATED,
      'registration successful',
      { user, profile },
    );
  }
}
