import fs from 'fs'

const input = fs.readFileSync('./src/days/day3/input.txt', 'utf8')

export function splitString(input: string): Array<string> {
  return [input.slice(0, input.length / 2), input.slice(input.length / 2)]
}

export function getSimilarCharacter(input: Array<string>): string {
  const [first, ...rest] = input
  for (const character of first.split('')) {
    const match = rest.every((s) => s.includes(character)) ? character : null
    if (match) {
      return match
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
  let group: Array<string> = []
  const value = input.split('\n').reduce((acc, curr) => {
    group.push(curr)
    if (group.length === 3) {
      const badge = getSimilarCharacter(group)
      group = []
      return acc + getNumericalValue(badge)
    }
    return acc
  }, 0)
  console.log('day3', value)
}
