import { useCallback, useState } from 'react'
import { createGame } from '../../../entities/game'
import type { GameState, Player } from '../../../shared/types'

export const useGameCreation = () => {
  const [isCreating, setIsCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createNewGame = useCallback(
    async (player1: Player, player2: Player): Promise<GameState | null> => {
      if (isCreating) return null

      setIsCreating(true)
      setError(null)

      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        const game = createGame(player1, player2)
        setIsCreating(false)
        return game
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to create game')
        setIsCreating(false)
        return null
      }
    },
    [isCreating],
  )

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return {
    isCreating,
    error,
    createNewGame,
    clearError,
  }
}
