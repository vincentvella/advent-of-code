import { parseBuffer } from './index'

describe('Day 6: Communication System', () => {
  it('should return end of buffer index + 1', () => {
    expect(parseBuffer('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5)
    expect(parseBuffer('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6)
    expect(parseBuffer('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10)
    expect(parseBuffer('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11)
  })
})
