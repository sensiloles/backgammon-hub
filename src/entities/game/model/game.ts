import {
  generateId,
  INITIAL_BOARD_STATE,
  INITIAL_DOUBLE_VALUE,
} from '../../../shared'
import type { GameState, Player } from '../../../shared/types'

export const createGame = (player1: Player, player2: Player): GameState => {
  return {
    id: generateId(),
    status: 'active',
    players: [player1, player2],
    currentPlayer: Math.floor(Math.random() * 2),
    board: [...INITIAL_BOARD_STATE],
    dice: null,
    doubleValue: INITIAL_DOUBLE_VALUE,
    createdAt: new Date(),
  }
}

export const switchPlayer = (game: GameState): GameState => {
  return {
    ...game,
    currentPlayer: game.currentPlayer === 0 ? 1 : 0,
    dice: null,
  }
}

export const updateGameBoard = (
  game: GameState,
  newBoard: number[],
): GameState => {
  return {
    ...game,
    board: [...newBoard],
  }
}

export const finishGame = (game: GameState, winner: Player): GameState => {
  return {
    ...game,
    status: 'finished',
    winner,
    dice: null,
  }
}
