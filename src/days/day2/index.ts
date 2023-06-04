import fs from 'fs'

const input = fs.readFileSync('./src/days/day2/input.txt', 'utf8')

const Values: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
}

function determineOutcome(elf: string, self: string): 0 | 3 | 6 {
  const elfValue = Values[elf]
  const selfValue = Values[self]

  let resultingValue = selfValue - elfValue
  if (resultingValue < 0) {
    resultingValue = resultingValue + 3
  }

  switch (resultingValue) {
    case 0:
      return 3 // Tie
    case 1:
      return 6 // Win
    case 2:
      return 0 // Lose
    default:
      throw new Error('Something went wrong')
  }
}

export function day2() {
  const totalScore = input.split('\n').reduce((acc, curr) => {
    const [elf, self] = curr.split(' ')
    const outcome = determineOutcome(elf, self)
    const roundTotal = outcome + Values[self]
    return acc + roundTotal
  }, 0)
  console.log(totalScore)
}
