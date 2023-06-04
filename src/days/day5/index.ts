import fs from 'fs'

const input = fs.readFileSync('./src/days/day5/input.txt', 'utf8')

type Board = Array<Array<string>>

function filterEmptyEntries(board: Board) {
  return board.map((column) => {
    return column.filter((seat) => {
      return seat !== ' '
    })
  })
}

function constructBoard(input: string): [Board, number] {
  const board: Board = []
  let boardDeclarationEnds = 0
  const lines = input.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.includes('1')) {
      // We've reached the end of the board - empty line as well
      boardDeclarationEnds = i + 2
      break
    }
    line.split('').forEach((char, index) => {
      if ((index + 1) % 4 === 0) return
      if ((index + 1) % 2 === 0) {
        const col = Math.floor(index / 4)
        if (!board[col]) {
          board[col] = []
        }
        board[col].push(char)
      }
    })
  }
  return [filterEmptyEntries(board), boardDeclarationEnds]
}

const getMoveAttributes = (move: string): [number, number, number] => {
  const [_, num, __, from, ___, to] = move.split(' ')
  return [parseInt(num, 10), parseInt(from, 10), parseInt(to, 10)]
}

function followMoves(board: Board, moves: string[]) {
  moves.forEach((move) => {
    const [num, from, to] = getMoveAttributes(move)
    const moves = Array.from({ length: num }, (_, i) => [from - 1, to - 1])
    moves.forEach(([from, to]) => {
      const crate = board[from].shift() as string
      board[to].unshift(crate)
    })
  })
}

function getTopCrates(board: Board): string {
  return board
    .map((column) => {
      return column[0]
    })
    .join('')
}

export function day5() {
  const lines = input.split('\n')
  const [board, boardDeclarationEnds] = constructBoard(input)
  const moves = lines.slice(boardDeclarationEnds)
  followMoves(board, moves)
  const result = getTopCrates(board)
  console.log(result)
}
