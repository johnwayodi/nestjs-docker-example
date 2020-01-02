import { JwtStrategy } from './jwt-strategy';

describe('JwtStragegy', () => {
  it('should be defined', () => {
    expect(new JwtStrategy()).toBeDefined();
  });
});
