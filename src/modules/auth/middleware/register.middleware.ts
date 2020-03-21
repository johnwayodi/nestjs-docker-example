import {
  Injectable,
  NestMiddleware,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { registerSchema } from '../auth-shemas';
import { UserService } from '../../users/services/user.service';

@Injectable()
export class RegisterMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}

  async use(req: Request, res: Response, next: () => void) {
    const validData = this.validateInput(req);
    await this.checkEmail(validData.email);
    next();
  }

  validateInput(req: Request) {
    const { error, value } = registerSchema.validate(req.body, {
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

  async checkEmail(email: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      throw new ConflictException(`user with similar email exists.`);
    }
  }
}
