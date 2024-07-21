import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

describe('ClassNames', () => {
  test('with one params', () => {
    expect(ClassNames('class')).toBe('class');
  });
  test('with one params and two obj', () => {
    expect(ClassNames('class', { active: true })).toBe('class active');
  });
  test('with one params and two obj one false', () => {
    expect(ClassNames('class', { active: true, hover: false })).toBe('class active');
  });
  test('with one params and two obj one undefined', () => {
    expect(ClassNames('class', { active: true, hover: undefined })).toBe('class active');
  });
  test('with one params and two obj and arr', () => {
    expect(ClassNames('class', { active: true }, ['add_class'])).toBe('class active add_class');
  });
});
