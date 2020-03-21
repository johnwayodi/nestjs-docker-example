import {
  Injectable,
  NestMiddleware,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { loginSchema } from '../auth-shemas';
import { UserService } from '../../users/services/user.service';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}

  async use(req: Request, res: Response, next: () => void) {
    const validData = this.validateInput(req);
    await this.checkUserExistance(validData.username);
    next();
  }

  validateInput(req: Request) {
    const { error, value } = loginSchema.validate(req.body, {
      abortEarly: false,
      errors: {
        label: false,
      },
    });
    if (error) {
      throw new BadRequestException(error);
    }
    return value;
  }

  async checkUserExistance(email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException(`user ${email} does not exist`);
    }
    return user;
  }
}
