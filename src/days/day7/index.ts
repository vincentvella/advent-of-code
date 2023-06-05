import fs from 'fs'

class TreeNode {
  children: TreeNode[] = []
  parent: TreeNode | null = null

  constructor(public isDir: boolean, public name: string, public size: number = 0) {}

  addChild(child: TreeNode) {
    this.children.push(child)
    child.parent = this
  }

  getSize(): number {
    if (this.isDir) {
      return this.children.reduce((acc, child) => acc + child.getSize(), 0)
    } else {
      return this.size
    }
  }

  print(level = 0) {
    console.log(
      Array.from({ length: level }, () => '  ').join('') +
        '- ' +
        this.name +
        ' (' +
        (this.isDir ? 'total' : 'file') +
        '=' +
        this.getSize() +
        ')',
    )
    if (this.children.length) {
      this.children.forEach((child) => child.print(level + 1))
    }
  }

  combineSubdirectorySizesLessThanLimit(): number {
    let result = 0
    const dirs = this.children.filter((child) => child.isDir)
    dirs.forEach((dir) => {
      if (dir.getSize() <= 100_000) {
        result += dir.getSize() + dir.combineSubdirectorySizesLessThanLimit()
      } else {
        result += dir.combineSubdirectorySizesLessThanLimit()
      }
    })
    return result
  }
}

class Tree {
  root: TreeNode
  current: TreeNode

  constructor() {
    this.root = new TreeNode(true, 'root')
    this.current = this.root
  }

  goUp() {
    if (this.current.parent !== null) {
      this.current = this.current.parent
    }
  }

  goToChild(name: string) {
    const child = this.current.children.find((child) => child.name === name)
    if (child !== undefined) {
      this.current = child
    }
  }

  addChild(node: TreeNode) {
    this.current.addChild(node)
  }
}

const input = fs.readFileSync('./src/days/day7/input.txt', 'utf8')

const createDirectoryTree = () => {
  const tree = new Tree()
  const rows = input.split('\n')
  while (rows.length) {
    const line = (rows.shift() as string).replace('$ ', '')
    if (line === 'ls') {
      while (rows.length && !rows[0].startsWith('$')) {
        const row = rows.shift() as string
        const [size, name] = row.split(' ')
        if (size === 'dir') {
          tree.addChild(new TreeNode(true, name))
        } else {
          tree.addChild(new TreeNode(false, name, parseInt(size, 10)))
        }
      }
    } else if (line === 'cd ..') {
      tree.goUp()
    } else if (line.startsWith('cd ')) {
      tree.goToChild(line.replace('cd ', ''))
    } else {
      console.log('Unknown command: ' + line)
    }
  }
  return tree
}

export function day7() {
  const tree = createDirectoryTree()
  // tree.root.print()
  console.log(tree.root.combineSubdirectorySizesLessThanLimit())
}
