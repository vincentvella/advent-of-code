import type { N } from 'ts-toolbelt'
import days from './days/index'

type ChristmasDay = N.Range<1, 2>
type Day = ChristmasDay[number]

const aocDay = (day: Day) => {
  days[`day${day}`]()
}

aocDay(2)
