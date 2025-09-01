import { DICE_VALUES } from '../../../shared'
import type { DiceRoll } from '../../../shared/types'

export const rollDice = (): DiceRoll => {
  const dice1 = DICE_VALUES[Math.floor(Math.random() * DICE_VALUES.length)]
  const dice2 = DICE_VALUES[Math.floor(Math.random() * DICE_VALUES.length)]

  return {
    dice1,
    dice2,
    isDouble: dice1 === dice2,
  }
}

export const getMoves = (diceRoll: DiceRoll): number[] => {
  if (diceRoll.isDouble) {
    return [diceRoll.dice1, diceRoll.dice1, diceRoll.dice1, diceRoll.dice1]
  }
  return [diceRoll.dice1, diceRoll.dice2]
}

export const getDiceTotal = (diceRoll: DiceRoll): number => {
  return diceRoll.dice1 + diceRoll.dice2
}
