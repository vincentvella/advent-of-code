import { parseBuffer } from './index'

describe('Day 6: Communication System', () => {
  // part 1
  // it('should return index + 1 of start of marker', () => {
  //   expect(parseBuffer('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5)
  //   expect(parseBuffer('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6)
  //   expect(parseBuffer('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10)
  //   expect(parseBuffer('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11)
  // })

  it('should return index + 1 of start of message', () => {
    expect(parseBuffer('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(19)
    expect(parseBuffer('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(23)
    expect(parseBuffer('nppdvjthqldpwncqszvftbrmjlhg')).toBe(23)
    expect(parseBuffer('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(29)
    expect(parseBuffer('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(26)
  })
})
