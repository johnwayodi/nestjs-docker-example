import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './../../users/services/user.service';
import { ILogin, IRegister } from '../interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginUser(data: any) {
    const payload = { ...data };
    return {
      user: payload,
      accessToken: this.jwtService.sign(payload),
    };
  }

  async registerUser(data: IRegister) {
    return await this.userService.create(data);
  }
}
