import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

import { JwtServiceMock } from './../__mocks__/jwt.service.mock';
import { AuthService } from './auth.service';
import { UserServiceMock } from './../../users/__mocks__/user.service.mock';
import { UserService } from './../../users/services/user.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useClass: JwtServiceMock },
        { provide: UserService, useClass: UserServiceMock },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
