import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User("sudha","agarwal","sudha@gmail.com","123456")).toBeTruthy();
  });
});
