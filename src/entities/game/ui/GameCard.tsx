import { Button, Card } from '../../../shared'
import type { GameState } from '../../../shared/types'
import './GameCard.css'

export interface GameCardProps {
  game: GameState
  onJoin?: () => void
  onView?: () => void
}

export const GameCard = ({ game, onJoin, onView }: GameCardProps) => {
  const getStatusText = () => {
    switch (game.status) {
      case 'waiting':
        return 'Waiting for player'
      case 'active':
        return 'In progress'
      case 'finished':
        return `Winner: ${game.winner?.name}`
      default:
        return 'Unknown'
    }
  }

  const getStatusClass = () => {
    switch (game.status) {
      case 'waiting':
        return 'waiting'
      case 'active':
        return 'active'
      case 'finished':
        return 'finished'
      default:
        return ''
    }
  }

  return (
    <Card className="game-card">
      <div className="game-card__header">
        <div className="game-card__players">
          <span>{game.players[0].name}</span>
          <span className="game-card__vs">vs</span>
          <span>{game.players[1].name}</span>
        </div>
        <div className={`game-card__status ${getStatusClass()}`}>
          {getStatusText()}
        </div>
      </div>

      <div className="game-card__info">
        <div className="game-card__created">
          Created: {game.createdAt.toLocaleDateString()}
        </div>
        {game.status === 'active' && (
          <div className="game-card__current-player">
            Current: {game.players[game.currentPlayer].name}
          </div>
        )}
      </div>

      <div className="game-card__actions">
        {game.status === 'waiting' && onJoin && (
          <Button onClick={onJoin} size="sm">
            Join Game
          </Button>
        )}
        {onView && (
          <Button variant="secondary" onClick={onView} size="sm">
            View Game
          </Button>
        )}
      </div>
    </Card>
  )
}
