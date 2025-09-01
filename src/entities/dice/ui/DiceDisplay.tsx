import type { DiceRoll } from '../../../shared/types'
import './DiceDisplay.css'

export interface DiceDisplayProps {
  diceRoll: DiceRoll | null
  isRolling?: boolean
}

export const DiceDisplay = ({
  diceRoll,
  isRolling = false,
}: DiceDisplayProps) => {
  if (!diceRoll && !isRolling) {
    return null
  }

  return (
    <div className="dice-display">
      <div className={`dice ${isRolling ? 'dice--rolling' : ''}`}>
        <div className="dice__face">{isRolling ? '?' : diceRoll?.dice1}</div>
      </div>
      <div className={`dice ${isRolling ? 'dice--rolling' : ''}`}>
        <div className="dice__face">{isRolling ? '?' : diceRoll?.dice2}</div>
      </div>
      {diceRoll?.isDouble && !isRolling && (
        <div className="dice-display__double">Double!</div>
      )}
    </div>
  )
}
