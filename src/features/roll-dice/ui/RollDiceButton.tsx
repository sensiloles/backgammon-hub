import { DiceDisplay } from '../../../entities/dice'
import { Button } from '../../../shared'
import { useDiceRoll } from '../model/useDiceRoll'
import './RollDiceButton.css'

export interface RollDiceButtonProps {
  onRoll?: (diceRoll: {
    dice1: number
    dice2: number
    isDouble: boolean
  }) => void
  disabled?: boolean
}

export const RollDiceButton = ({
  onRoll,
  disabled = false,
}: RollDiceButtonProps) => {
  const { currentRoll, isRolling, roll } = useDiceRoll()

  const handleRoll = async () => {
    const result = await roll()
    if (result && onRoll) {
      onRoll(result)
    }
  }

  return (
    <div className="roll-dice-feature">
      <Button
        onClick={handleRoll}
        disabled={disabled || isRolling}
        variant="primary"
        size="lg"
      >
        {isRolling ? 'Rolling...' : 'Roll Dice'}
      </Button>

      <DiceDisplay diceRoll={currentRoll} isRolling={isRolling} />
    </div>
  )
}
