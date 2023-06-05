import fs from 'fs'
const input = fs.readFileSync('./src/days/day8/input.txt', 'utf8')

const board: Array<Array<number>> = []

const initializeBoard = () => {
  input.split('\n').forEach((line, y) => {
    line.split('').forEach((char, x) => {
      if (board[y] === undefined) {
        board[y] = []
      }
      board[y][x] = parseInt(char, 10)
    })
  })
}

const checkVisibleFromLeft = (x: number, row: number[]): boolean => {
  const left = row.slice(0, x).reverse()
  return left.every((value) => value < row[x])
}

const checkVisibleFromRight = (x: number, row: number[]): boolean => {
  const right = row.slice(x + 1)
  return right.every((value) => value < row[x])
}

const checkVisibleFromBottom = (y: number, column: number[]): boolean => {
  const bottom = column.slice(y + 1)
  return bottom.every((value) => value < column[y])
}

const checkVisibleFromTop = (y: number, column: number[]): boolean => {
  const top = column.slice(0, y).reverse()
  return top.every((value) => value < column[y])
}

const checkVisible = (x: number, y: number): boolean => {
  if (x === 0 || x === board[y].length - 1 || y === 0 || y === board.length - 1) {
    return true
  }
  const row = board[y]
  const column = board.map((row) => row[x])
  if (
    checkVisibleFromLeft(x, row) ||
    checkVisibleFromRight(x, row) ||
    checkVisibleFromTop(y, column) ||
    checkVisibleFromBottom(y, column)
  ) {
    return true
  }
  return false
}

export function day8() {
  initializeBoard()
  let visibleCount = 0
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      checkVisible(x, y) ? visibleCount++ : null
    }
  }
  console.log('day8', visibleCount)
}
