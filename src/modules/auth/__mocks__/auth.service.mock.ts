import { UserMock } from '../../users/__mocks__/user.data.mocks';

export class AuthServiceMock {
  validateUser() {
    return UserMock;
  }

  loginUser(id: string) {
    return { user: UserMock, access_token: 'da123213' };
  }
}
