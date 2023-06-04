import { decideIfIdRangeFullyContainsOther } from './index'

describe('decideIfRangeFullyContainsOther', () => {
  it('should return true if range fully contains other', () => {
    expect(decideIfIdRangeFullyContainsOther([1, 3], [2, 2])).toBe(true)
    expect(decideIfIdRangeFullyContainsOther([1, 3], [1, 3])).toBe(true)
    expect(decideIfIdRangeFullyContainsOther([1, 3], [3, 4])).toBe(false)
  })
})
