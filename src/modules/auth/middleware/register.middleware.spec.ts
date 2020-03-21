import { RegisterMiddleware } from './register.middleware';

describe('RegisterMiddleware', () => {
  it('should be defined', () => {
    expect(new RegisterMiddleware()).toBeDefined();
  });
});
