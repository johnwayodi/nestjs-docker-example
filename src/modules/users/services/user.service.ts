import { Injectable, Inject } from '@nestjs/common';

import { ICreateUser } from '../interfaces/user.interface';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly userRepo: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepo.findAll<User>({ raw: true });
    return users;
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { id },
    });
    return user;
  }

  async findByUserName(username: string): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { username },
    });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { email },
      raw: true,
    });
    return user;
  }

  async create(data: ICreateUser): Promise<User> {
    const { email, password } = data;
    const newUser = await this.userRepo.create({ email, password });
    // TODO: to be updated on the email verification feature
    newUser.activated = true;
    const user = await newUser.save();
    return user;
  }
}
