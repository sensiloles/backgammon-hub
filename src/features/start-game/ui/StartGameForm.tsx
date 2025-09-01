import { useId, useState } from 'react'
import { createPlayer } from '../../../entities/player'
import { Button, Card } from '../../../shared'
import type { GameState } from '../../../shared/types'
import { useGameCreation } from '../model/useGameCreation'
import './StartGameForm.css'

export interface StartGameFormProps {
  onGameCreated?: (game: GameState) => void
}

export const StartGameForm = ({ onGameCreated }: StartGameFormProps) => {
  const [player1Name, setPlayer1Name] = useState('')
  const [player2Name, setPlayer2Name] = useState('')
  const { isCreating, error, createNewGame, clearError } = useGameCreation()
  const player1Id = useId()
  const player2Id = useId()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!player1Name.trim() || !player2Name.trim()) {
      return
    }

    clearError()

    const player1 = createPlayer(player1Name.trim())
    const player2 = createPlayer(player2Name.trim())

    const game = await createNewGame(player1, player2)

    if (game && onGameCreated) {
      onGameCreated(game)
      setPlayer1Name('')
      setPlayer2Name('')
    }
  }

  return (
    <Card title="Start New Game" className="start-game-form">
      <form onSubmit={handleSubmit}>
        <div className="start-game-form__field">
          <label htmlFor={player1Id}>Player 1 Name:</label>
          <input
            type="text"
            id={player1Id}
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
            placeholder="Enter player 1 name"
            required
            maxLength={20}
          />
        </div>

        <div className="start-game-form__field">
          <label htmlFor={player2Id}>Player 2 Name:</label>
          <input
            type="text"
            id={player2Id}
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
            placeholder="Enter player 2 name"
            required
            maxLength={20}
          />
        </div>

        {error && <div className="start-game-form__error">{error}</div>}

        <Button
          type="submit"
          disabled={isCreating || !player1Name.trim() || !player2Name.trim()}
          size="lg"
        >
          {isCreating ? 'Creating Game...' : 'Start Game'}
        </Button>
      </form>
    </Card>
  )
}
