import { Greeter } from '../src/index';
test('My Greeter', () => {
  expect(Greeter('Test')).toBe('Hello Test');
});
