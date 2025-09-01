import { Card } from '../../../shared'
import type { Player } from '../../../shared/types'
import './PlayerCard.css'

export interface PlayerCardProps {
  player: Player
  showRating?: boolean
}

export const PlayerCard = ({ player, showRating = true }: PlayerCardProps) => {
  return (
    <Card className="player-card">
      <div className="player-card__content">
        <div className="player-card__avatar">
          {player.avatar ? (
            <img src={player.avatar} alt={player.name} />
          ) : (
            <div className="player-card__avatar-placeholder">
              {player.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="player-card__info">
          <div className="player-card__name">{player.name}</div>
          {showRating && (
            <div className="player-card__rating">Rating: {player.rating}</div>
          )}
          <div
            className={`player-card__status ${player.isOnline ? 'online' : 'offline'}`}
          >
            {player.isOnline ? 'Online' : 'Offline'}
          </div>
        </div>
      </div>
    </Card>
  )
}
