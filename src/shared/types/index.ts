export interface Player {
  id: string
  name: string
  avatar?: string
  rating: number
  isOnline: boolean
}

export interface GameState {
  id: string
  status: 'waiting' | 'active' | 'finished'
  players: [Player, Player]
  currentPlayer: number
  board: number[]
  dice: DiceRoll | null
  doubleValue: number
  winner?: Player
  createdAt: Date
}

export interface Move {
  from: number
  to: number
  player: number
}

export interface DiceRoll {
  dice1: number
  dice2: number
  isDouble: boolean
}

export type GameStatus = 'waiting' | 'active' | 'finished'
export type PieceColor = 'white' | 'black'
