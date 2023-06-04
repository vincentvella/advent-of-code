import fs from 'fs'

const input = fs.readFileSync('./src/days/day1/rev2/input.txt', 'utf8')

function calculateTopThreeElvesCalories(input: string) {
  let elvesWithMostCalories = [0, 0, 0]
  input.split('\n').reduce((acc, curr) => {
    if (curr === '') {
      // Adds the previous elf to the list of elves with the most calories
      elvesWithMostCalories.push(acc[acc.length - 1])
      // Sorts the list of elves with the most calories and keeps the top 3
      elvesWithMostCalories = elvesWithMostCalories.sort((a, b) => b - a).slice(0, 3)
      // Starts a new record for the next elf
      acc.push(0)
    } else {
      // Adds calories to elf
      acc[acc.length - 1] += parseInt(curr, 10)
    }
    return acc
  }, [] as Array<number>)
  // Log the calories carried by the elf with the most calories
  return elvesWithMostCalories.reduce((acc, curr) => (acc += curr), 0)
}

export function day1() {
  const result = calculateTopThreeElvesCalories(input)
  console.log(result)
}
