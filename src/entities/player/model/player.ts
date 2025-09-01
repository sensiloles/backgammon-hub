import { formatPlayerName, generateId } from '../../../shared'
import type { Player } from '../../../shared/types'

export const createPlayer = (name: string, rating = 1000): Player => {
  return {
    id: generateId(),
    name: formatPlayerName(name),
    rating,
    isOnline: true,
  }
}

export const updatePlayerRating = (
  player: Player,
  newRating: number,
): Player => {
  return {
    ...player,
    rating: Math.max(0, newRating),
  }
}

export const setPlayerOnlineStatus = (
  player: Player,
  isOnline: boolean,
): Player => {
  return {
    ...player,
    isOnline,
  }
}
