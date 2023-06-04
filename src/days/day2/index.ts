import fs from 'fs'

const input = fs.readFileSync('./src/days/day2/input.txt', 'utf8')

const Values: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  X: 0,
  Y: 3,
  Z: 6,
}

const getHand = (hand: number): number => (hand % 3 < 1 ? 3 : hand % 3)

export function determineSelf(elf: string, result: string): number {
  const elfValue = Values[elf]
  const desiredResult = Values[result]
  switch (desiredResult) {
    case 0:
      return getHand(elfValue - 1)
    case 3:
      return getHand(elfValue)
    case 6:
      return getHand(elfValue + 1)
    default:
      throw new Error('Something went wrong')
  }
}

export function day2() {
  const totalScore = input.split('\n').reduce((acc, curr) => {
    const [elf, result] = curr.split(' ')
    const self = determineSelf(elf, result)
    const outcome = Values[result]
    const roundTotal = self + outcome
    return acc + roundTotal
  }, 0)
  console.log(totalScore)
}
