import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './../services/user.service';
import { UserServiceMock } from '../__mocks__/user.service.mock';
import { responseMock } from './../../shared/__mocks__/response.mock';

describe('User Controller', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useClass: UserServiceMock }],
    }).compile();

    userService = module.get<UserService>(UserService);
    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should fetch all users successfully', async done => {
    jest.spyOn(userService, 'findAll');
    await controller.findAll(responseMock);
    expect(userService.findAll).toHaveBeenCalled();
    done();
  });
});
