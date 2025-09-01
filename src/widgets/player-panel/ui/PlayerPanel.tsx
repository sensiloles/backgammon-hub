import { PlayerCard } from '../../../entities/player'
import { RollDiceButton } from '../../../features/roll-dice'
import { Card } from '../../../shared'
import type { GameState } from '../../../shared/types'
import './PlayerPanel.css'

export interface PlayerPanelProps {
  game: GameState
  onDiceRoll?: (diceRoll: {
    dice1: number
    dice2: number
    isDouble: boolean
  }) => void
}

export const PlayerPanel = ({ game, onDiceRoll }: PlayerPanelProps) => {
  const canRollDice = game.status === 'active' && !game.dice

  return (
    <div className="player-panel">
      <Card title="Players" className="player-panel__players">
        <div className="player-panel__player-cards">
          {game.players.map((player, index) => (
            <div
              key={player.id}
              className={`player-panel__player ${index === game.currentPlayer ? 'current' : ''}`}
            >
              <PlayerCard player={player} />
              {index === game.currentPlayer && (
                <div className="player-panel__current-indicator">
                  Current Turn
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card title="Game Actions" className="player-panel__actions">
        <div className="player-panel__dice-section">
          <RollDiceButton onRoll={onDiceRoll} disabled={!canRollDice} />
          {!canRollDice && game.dice && (
            <div className="player-panel__dice-message">
              Dice already rolled. Make your moves!
            </div>
          )}
        </div>
      </Card>

      <Card title="Game Info" className="player-panel__info">
        <div className="player-panel__game-details">
          <div className="player-panel__detail">
            <strong>Game ID:</strong> {game.id}
          </div>
          <div className="player-panel__detail">
            <strong>Status:</strong> {game.status}
          </div>
          <div className="player-panel__detail">
            <strong>Double Value:</strong> {game.doubleValue}
          </div>
          <div className="player-panel__detail">
            <strong>Created:</strong> {game.createdAt.toLocaleDateString()}
          </div>
        </div>
      </Card>
    </div>
  )
}
