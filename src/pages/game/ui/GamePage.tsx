import { useEffect, useState } from 'react'
import { createGame, createPlayer } from '../../../entities'
import { Button } from '../../../shared'
import type { DiceRoll, GameState } from '../../../shared/types'
import { GameBoard, PlayerPanel } from '../../../widgets'
import './GamePage.css'

export interface GamePageProps {
  gameId?: string
}

export const GamePage = ({ gameId: _gameId }: GamePageProps) => {
  const [game, setGame] = useState<GameState | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading game data
    const loadGame = async () => {
      setIsLoading(true)

      // In a real app, this would fetch from API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create a sample game
      const player1 = createPlayer('Alice', 1200)
      const player2 = createPlayer('Bob', 1150)
      const sampleGame = createGame(player1, player2)

      setGame(sampleGame)
      setIsLoading(false)
    }

    loadGame()
  }, [])

  const handleDiceRoll = (diceRoll: DiceRoll) => {
    if (!game) return

    setGame((prev) =>
      prev
        ? {
            ...prev,
            dice: diceRoll,
          }
        : null,
    )
  }

  const handlePointClick = (pointIndex: number) => {
    if (!game || !game.dice) return

    console.log('Point clicked:', pointIndex)
    // In a real app, this would handle piece movement
  }

  const handleBackToHome = () => {
    // In a real app, this would navigate back to home
    console.log('Navigate back to home')
  }

  if (isLoading) {
    return (
      <div className="game-page game-page--loading">
        <div className="game-page__loading">
          <h2>Loading Game...</h2>
          <p>Please wait while we load the game data.</p>
        </div>
      </div>
    )
  }

  if (!game) {
    return (
      <div className="game-page game-page--error">
        <div className="game-page__error">
          <h2>Game Not Found</h2>
          <p>The requested game could not be found.</p>
          <Button onClick={handleBackToHome}>Back to Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="game-page">
      <div className="game-page__header">
        <Button variant="secondary" onClick={handleBackToHome} size="sm">
          ← Back to Home
        </Button>
        <h1>Game: {game.id}</h1>
      </div>

      <div className="game-page__content">
        <div className="game-page__board">
          <GameBoard game={game} onPointClick={handlePointClick} />
        </div>

        <div className="game-page__sidebar">
          <PlayerPanel game={game} onDiceRoll={handleDiceRoll} />
        </div>
      </div>
    </div>
  )
}
