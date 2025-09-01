import { useCallback } from 'react'
import { isValidMove } from '../../../shared'
import type { GameState, Move } from '../../../shared/types'

export const useMoveValidation = () => {
  const validateMove = useCallback(
    (move: Move, gameState: GameState): boolean => {
      if (!isValidMove(move.from, move.to)) {
        return false
      }

      // Basic validation - check if it's the correct player's turn
      if (move.player !== gameState.currentPlayer) {
        return false
      }

      // Check if there are pieces at the source position
      const sourceValue = gameState.board[move.from]
      if (move.player === 0 && sourceValue <= 0) {
        return false
      }
      if (move.player === 1 && sourceValue >= 0) {
        return false
      }

      return true
    },
    [],
  )

  const applyMove = useCallback(
    (move: Move, gameState: GameState): GameState | null => {
      if (!validateMove(move, gameState)) {
        return null
      }

      const newBoard = [...gameState.board]

      // Remove piece from source
      if (move.player === 0) {
        newBoard[move.from]--
      } else {
        newBoard[move.from]++
      }

      // Add piece to destination
      if (move.player === 0) {
        newBoard[move.to]++
      } else {
        newBoard[move.to]--
      }

      return {
        ...gameState,
        board: newBoard,
      }
    },
    [validateMove],
  )

  return {
    validateMove,
    applyMove,
  }
}
