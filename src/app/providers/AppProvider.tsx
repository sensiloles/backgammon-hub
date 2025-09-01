import type { ReactNode } from 'react'

export interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  // In a real app, this would provide context for:
  // - Authentication
  // - Theme
  // - Game state management
  // - WebSocket connections

  return <>{children}</>
}
