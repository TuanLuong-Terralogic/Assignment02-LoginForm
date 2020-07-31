import { validateImage } from '../index';

test('Test for true', () => {
  const file = new Blob([], { type: 'image/jpg' })
  const value = validateImage(file);
  expect(value).toBeTruthy();
})
test('Test for true', () => {
  const file = new Blob([], { type: 'image/png' })
  const value = validateImage(file);
  expect(value).toBeTruthy();
})
test('Test for true', () => {
  const file = new Blob([], { type: 'image/jpeg' })
  const value = validateImage(file);
  expect(value).toBeTruthy();
})
test('Test for false', () => {
  const file = new Blob([], { type: '' })
  const value = validateImage(file);
  expect(value).toBeFalsy();
})
test('Test for false', () => {
  const file = new Blob([], { type: 'image/gif' })
  const value = validateImage(file);
  expect(value).toBeFalsy();
})