import { UserMock } from './user.data.mocks';
import { IUpdateUser, ICreateUser } from './../interfaces/user.interface';

export class UserServiceMock {
  findAll() {
    return [UserMock];
  }

  findById(id: string) {
    return UserMock;
  }

  findByUserName(username: string) {
    return UserMock;
  }

  add(data: ICreateUser) {
    return UserMock;
  }

  update(id: string, data: IUpdateUser) {
    return UserMock;
  }
}
