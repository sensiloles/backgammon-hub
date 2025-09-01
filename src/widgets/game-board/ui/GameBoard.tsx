import { DiceDisplay } from '../../../entities/dice'
import { Card } from '../../../shared'
import type { GameState } from '../../../shared/types'
import './GameBoard.css'

export interface GameBoardProps {
  game: GameState
  onPointClick?: (pointIndex: number) => void
}

export const GameBoard = ({ game, onPointClick }: GameBoardProps) => {
  const renderPoint = (pointIndex: number) => {
    const pieces = game.board[pointIndex]
    const isEmpty = pieces === 0
    const isPlayer1 = pieces > 0
    const pieceCount = Math.abs(pieces)

    return (
      <button
        key={pointIndex}
        type="button"
        className={`game-board__point ${isEmpty ? 'empty' : isPlayer1 ? 'player1' : 'player2'}`}
        onClick={() => onPointClick?.(pointIndex)}
      >
        <div className="game-board__point-number">{pointIndex}</div>
        {!isEmpty && (
          <div className="game-board__pieces">
            {Array.from({ length: Math.min(pieceCount, 5) }, (_, i) => (
              <div
                key={`${pointIndex}-${isPlayer1 ? 'p1' : 'p2'}-${i}`}
                className="game-board__piece"
              />
            ))}
            {pieceCount > 5 && (
              <div className="game-board__piece-count">+{pieceCount - 5}</div>
            )}
          </div>
        )}
      </button>
    )
  }

  return (
    <Card className="game-board" title="Backgammon Board">
      <div className="game-board__container">
        <div className="game-board__top">
          {Array.from({ length: 12 }, (_, i) => renderPoint(12 + i))}
        </div>

        <div className="game-board__middle">
          <div className="game-board__bar">Bar</div>
          <div className="game-board__dice-area">
            <DiceDisplay diceRoll={game.dice} />
          </div>
        </div>

        <div className="game-board__bottom">
          {Array.from({ length: 12 }, (_, i) => renderPoint(11 - i))}
        </div>
      </div>

      <div className="game-board__status">
        <div className="game-board__current-player">
          Current Turn: {game.players[game.currentPlayer].name}
        </div>
        <div className="game-board__game-status">Status: {game.status}</div>
      </div>
    </Card>
  )
}
