import {
  Controller,
  Req,
  Res,
  Post,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

import { AuthService } from './../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request, @Res() res: Response) {
    const { user, access_token } = await this.authService.loginUser(req.user);
    res.status(HttpStatus.OK).json({
      message: 'login success',
      user,
      access_token,
    });
  }

  @Post('register')
  async register(@Req() req: Request, @Res() res: Response) {
    const user = await this.authService.registerUser(req.body);
    res.status(HttpStatus.CREATED).json({
      message: 'register success',
      user,
    });
  }
}
