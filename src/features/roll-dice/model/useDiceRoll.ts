import { useCallback, useState } from 'react'
import { rollDice } from '../../../entities/dice'
import type { DiceRoll } from '../../../shared/types'

export const useDiceRoll = () => {
  const [currentRoll, setCurrentRoll] = useState<DiceRoll | null>(null)
  const [isRolling, setIsRolling] = useState(false)

  const roll = useCallback(async () => {
    if (isRolling) return

    setIsRolling(true)

    // Simulate rolling animation delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const newRoll = rollDice()
    setCurrentRoll(newRoll)
    setIsRolling(false)

    return newRoll
  }, [isRolling])

  const reset = useCallback(() => {
    setCurrentRoll(null)
    setIsRolling(false)
  }, [])

  return {
    currentRoll,
    isRolling,
    roll,
    reset,
  }
}
