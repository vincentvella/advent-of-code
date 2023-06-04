import { getNumericalValue, getSimilarCharacter, splitString } from './index'

test('splits string down middle', () => {
  expect(splitString('abcdef')).toStrictEqual(['abc', 'def'])
})

test('gets similar character from two strings', () => {
  expect(getSimilarCharacter(splitString('abcdaf'))).toBe('a')
})

test('gets numerical value of character', () => {
  expect(getNumericalValue('a')).toBe(1)
  expect(getNumericalValue('b')).toBe(2)
  expect(getNumericalValue('A')).toBe(27)
  expect(getNumericalValue('B')).toBe(28)
})
