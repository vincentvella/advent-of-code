import fs from 'fs'
import { get } from 'http'
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

const getViewingDistance = (height: number, vector: number[]) => {
  let distance = 0
  vector.find((value) => {
    distance++
    if (value >= height) {
      return true
    }
    return false
  })
  return distance
}

const getViewingDistanceLeft = (x: number, row: number[]): number => {
  const left = row.slice(0, x).reverse()
  return getViewingDistance(row[x], left)
}

const getViewingDistanceRight = (x: number, row: number[]): number => {
  const right = row.slice(x + 1)
  return getViewingDistance(row[x], right)
}

const getViewingDistanceBottom = (y: number, column: number[]): number => {
  const bottom = column.slice(y + 1)
  return getViewingDistance(column[y], bottom)
}

const getViewingDistanceTop = (y: number, column: number[]): number => {
  const top = column.slice(0, y).reverse()
  return getViewingDistance(column[y], top)
}

const getScenicScore = (x: number, y: number): number => {
  const row = board[y]
  const column = board.map((row) => row[x])
  const left = getViewingDistanceLeft(x, row)
  const right = getViewingDistanceRight(x, row)
  const bottom = getViewingDistanceBottom(y, column)
  const top = getViewingDistanceTop(y, column)
  return left * right * bottom * top
}

export function day8() {
  initializeBoard()
  let bestScenicScore = 0
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const scenicScore = getScenicScore(x, y)
      if (scenicScore > bestScenicScore) {
        bestScenicScore = scenicScore
      }
    }
  }
  console.log('day8', bestScenicScore)
}
