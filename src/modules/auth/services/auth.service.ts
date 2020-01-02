import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './../../users/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByUserName(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginUser(user: any) {
    const payload = { ...user };
    return {
      user: payload,
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerUser(user: any) {
    return await this.userService.add(user);
  }
}
