import { determineSelf } from './index'

test('determines your score', () => {
  expect(determineSelf('A', 'X')).toBe(3)
  expect(determineSelf('B', 'X')).toBe(1)
  expect(determineSelf('C', 'X')).toBe(2)
  expect(determineSelf('A', 'Y')).toBe(1)
  expect(determineSelf('B', 'Y')).toBe(2)
  expect(determineSelf('C', 'Y')).toBe(3)
  expect(determineSelf('A', 'Z')).toBe(2)
  expect(determineSelf('B', 'Z')).toBe(3)
  expect(determineSelf('C', 'Z')).toBe(1)
})
