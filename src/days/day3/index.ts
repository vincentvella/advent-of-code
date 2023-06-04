import fs from 'fs'

const input = fs.readFileSync('./src/days/day3/input.txt', 'utf8')

export function splitString(input: string): Array<string> {
  return [input.slice(0, input.length / 2), input.slice(input.length / 2)]
}

export function getSimilarCharacter(input: Array<string>): string {
  const [first, second] = input
  for (const character of first.split('')) {
    if (second.includes(character)) {
      return character
    }
  }
  throw new Error('No similar character found')
}

export function getNumericalValue(character: string): number {
  if (character.match(/[A-Z]/)) {
    return character.charCodeAt(0) - 64 + 26
  }
  return character.charCodeAt(0) - 96
}

export function day3() {
  const value = input.split('\n').reduce((acc, curr) => {
    const [first, second] = splitString(curr)
    const similarCharacter = getSimilarCharacter([first, second])
    const value = getNumericalValue(similarCharacter)
    return acc + value
  }, 0)
  console.log('day3', value)
}
