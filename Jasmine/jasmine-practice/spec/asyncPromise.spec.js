// math.spec.js

const { addAsync } = require('../asyncPromise.js');

describe('addAsync function', () => {
  it('should add two numbers asynchronously', async () => {
    const result = await addAsync(2, 3);
    expect(result).toBe(5);
  });

  it('should handle invalid inputs gracefully', async () => {
    try {
      await addAsync(2, 'invalid');
      fail('The promise should have rejected');
    } catch (error) {
      expect(error).toBe('Both inputs must be numbers');
    }
  });
});
