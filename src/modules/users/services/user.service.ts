import { Injectable, Inject } from '@nestjs/common';

import { IUser, ICreateUser, IUpdateUser } from '../interfaces/user.interface';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly usersRepo: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepo.findAll<User>({ raw: true });
  }

  async findById(userId: number): Promise<User> {
    const user = await this.usersRepo.findOne({
      where: { id: userId },
      raw: true,
    });
    return user;
  }

  async findByUserName(username: string): Promise<User> {
    return await this.usersRepo.findOne({ where: { username }, raw: true });
  }

  async add(data: any): Promise<User> {
    const userToCreate = await this.usersRepo.create({ ...data });
    const user = await userToCreate.save();
    return user;
  }

  async update(userId: string, data: any): Promise<User> {
    const userToUpdate = await this.usersRepo.findOne({
      where: { id: userId },
    });
    userToUpdate.username = data.username;
    userToUpdate.password = data.password;
    const updatedUser = await userToUpdate.save();
    return updatedUser;
  }
}
