import { Injectable, Inject } from '@nestjs/common';

import { UserProfile } from '../entities/profile.entity';
import {
  ICreateProfile,
  IUpdateProfile,
} from '../interfaces/profile.interface';
import { User } from '../entities/user.entity';

@Injectable()
export class ProfileService {
  constructor(
    @Inject('PROFILE_REPOSITORY')
    private readonly profileRepo: typeof UserProfile,
  ) {}

  async create(userId: number, data: ICreateProfile): Promise<UserProfile> {
    const result = await this.profileRepo.create({ ...data, userId });
    return result;
  }

  async get(userId: number): Promise<UserProfile> {
    const result = await this.profileRepo.findOne({
      where: { userId },
      include: [
        {
          model: User,
          as: 'user',
        },
      ],
    });
    return result;
  }

  async update(userId: number, data: IUpdateProfile): Promise<UserProfile> {
    const profile = await this.profileRepo.findOne({
      where: { userId },
      raw: true,
    });
    profile.firstName = data.firstName;
    profile.lastName = data.lastName;
    profile.phoneNo = data.phoneNo;
    profile.address = data.address;

    const result = await profile.save();
    return result;
  }
}
