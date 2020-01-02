import { UserMock } from './user.data.mocks';

export const userModelMock = {
  find() {
    return [UserMock];
  },

  findOne() {
    return UserMock;
  },

  save() {
    return UserMock;
  },
};
