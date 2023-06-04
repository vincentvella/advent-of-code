import fs from 'fs'

const input = fs.readFileSync('./src/days/day1/rev1/input.txt', 'utf8')

function calculateElfWithMostCalories(input: string) {
  let elfWithMostCalories = 0
  input.split('\n').reduce((acc, curr) => {
    if (curr === '') {
      // Check if the previously recorded elf has more than the current elf
      if (acc[acc.length - 1] > elfWithMostCalories) {
        elfWithMostCalories = acc.length - 1
      }
      // Starts a new record for the next elf
      acc.push(0)
    } else {
      // Adds calories to elf
      acc[acc.length - 1] += parseInt(curr, 10)
    }
    return acc
  }, [] as Array<number>)
  // Log the calories carried by the elf with the most calories
  console.log(elfWithMostCalories)
}

export function day1() {
  calculateElfWithMostCalories(input)
}
