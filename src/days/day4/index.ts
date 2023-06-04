import fs from 'fs'

const input = fs.readFileSync('./src/days/day4/input.txt', 'utf8')

function getMinMaxPair(input: string): [number, number] {
  const [min, max] = input.split('-')
  return [parseInt(min, 10), parseInt(max, 10)]
}

function getPair(input: string): [string, string] {
  const [first, second] = input.split(',')
  return [first, second]
}

function isInRange(input: number, range: [number, number]): boolean {
  const [min, max] = range
  return input >= min && input <= max
}

export function decideIfIdRangeOverlapsOther(
  assign1: [number, number],
  assign2: [number, number],
): boolean {
  const [minId1, maxId1] = assign1
  const [minId2, maxId2] = assign2
  return (
    isInRange(minId1, assign2) ||
    isInRange(maxId1, assign2) ||
    isInRange(minId2, assign1) ||
    isInRange(maxId2, assign1)
  )
}

export function day4() {
  let overlappingAssignmentPairs = 0
  input.split('\n').forEach((line) => {
    const [assign1, assign2] = getPair(line)
    const idRange1 = getMinMaxPair(assign1)
    const idRange2 = getMinMaxPair(assign2)
    const overlaps = decideIfIdRangeOverlapsOther(idRange1, idRange2)
    if (overlaps) {
      overlappingAssignmentPairs += 1
    }
  })
  console.log('day4: ', overlappingAssignmentPairs)
}
