import fs from 'fs'

export function parseBuffer(buffer: string) {
  const uniqueCharacters: string[] = []
  const chars = buffer.split('')
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    const matchedChar = uniqueCharacters.indexOf(char)
    if (matchedChar === -1) {
      uniqueCharacters.push(char)
    } else {
      uniqueCharacters.splice(0, matchedChar + 1)
      uniqueCharacters.push(char)
    }
    if (uniqueCharacters.length === 4) {
      return i + 1
    }
  }
}

const input = fs.readFileSync('./src/days/day6/input.txt', 'utf8')

export function day6() {
  const index = parseBuffer(input)
  console.log('day6', index)
}
