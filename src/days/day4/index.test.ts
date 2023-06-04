import { decideIfIdRangeOverlapsOther } from './index'

describe('decideIfRangeOverlapsOther', () => {
  it('should return true if range partially contains other', () => {
    expect(decideIfIdRangeOverlapsOther([1, 3], [2, 2])).toBe(true)
    expect(decideIfIdRangeOverlapsOther([1, 3], [1, 3])).toBe(true)
    expect(decideIfIdRangeOverlapsOther([1, 3], [3, 4])).toBe(true)
    expect(decideIfIdRangeOverlapsOther([1, 3], [4, 5])).toBe(false)
  })
})
