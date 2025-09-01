export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}

export const formatPlayerName = (name: string): string => {
  return name.trim().substring(0, 20)
}

export const getDiceSum = (dice1: number, dice2: number): number => {
  return dice1 + dice2
}

export const isValidMove = (from: number, to: number): boolean => {
  return from >= 0 && from <= 25 && to >= 0 && to <= 25 && from !== to
}
