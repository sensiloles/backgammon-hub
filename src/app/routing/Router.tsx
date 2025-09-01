import { useState } from 'react'
import { GamePage, HomePage } from '../../pages'

export type Route = 'home' | 'game'

export const Router = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>('home')
  const [gameId, setGameId] = useState<string | undefined>()

  // Simple router implementation
  // In a real app, you would use React Router or similar

  const navigate = (route: Route, params?: { gameId?: string }) => {
    setCurrentRoute(route)
    if (params?.gameId) {
      setGameId(params.gameId)
    }
  }

  // Make navigation available globally (in a real app, use context)
  ;(window as typeof window & { navigate: typeof navigate }).navigate = navigate

  switch (currentRoute) {
    case 'game':
      return <GamePage gameId={gameId} />
    default:
      return <HomePage />
  }
}
