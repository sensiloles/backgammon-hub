import { useState } from 'react'
import { GameCard } from '../../../entities/game'
import { StartGameForm } from '../../../features/start-game'
import { Button, Card } from '../../../shared'
import type { GameState } from '../../../shared/types'
import './HomePage.css'

export const HomePage = () => {
  const [games, setGames] = useState<GameState[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)

  const handleGameCreated = (game: GameState) => {
    setGames((prev) => [game, ...prev])
    setShowCreateForm(false)
  }

  const handleGameView = (gameId: string) => {
    // In a real app, this would navigate to game page
    console.log('Viewing game:', gameId)
  }

  const handleGameJoin = (gameId: string) => {
    // In a real app, this would handle joining a game
    console.log('Joining game:', gameId)
  }

  return (
    <div className="home-page">
      <div className="home-page__header">
        <h1>Backgammon Hub</h1>
        <p>Welcome to the ultimate backgammon gaming experience!</p>
      </div>

      <div className="home-page__content">
        <div className="home-page__section">
          <div className="home-page__section-header">
            <h2>Quick Actions</h2>
            <Button
              onClick={() => setShowCreateForm(!showCreateForm)}
              variant={showCreateForm ? 'secondary' : 'primary'}
            >
              {showCreateForm ? 'Cancel' : 'Create New Game'}
            </Button>
          </div>

          {showCreateForm && (
            <div className="home-page__create-form">
              <StartGameForm onGameCreated={handleGameCreated} />
            </div>
          )}
        </div>

        <div className="home-page__section">
          <h2>Recent Games</h2>
          {games.length === 0 ? (
            <Card className="home-page__empty-state">
              <div className="home-page__empty-content">
                <h3>No games yet!</h3>
                <p>Create your first game to get started.</p>
              </div>
            </Card>
          ) : (
            <div className="home-page__games-grid">
              {games.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onView={() => handleGameView(game.id)}
                  onJoin={() => handleGameJoin(game.id)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="home-page__section">
          <h2>Game Statistics</h2>
          <div className="home-page__stats">
            <Card className="home-page__stat-card">
              <div className="home-page__stat">
                <div className="home-page__stat-number">{games.length}</div>
                <div className="home-page__stat-label">Total Games</div>
              </div>
            </Card>
            <Card className="home-page__stat-card">
              <div className="home-page__stat">
                <div className="home-page__stat-number">
                  {games.filter((g) => g.status === 'active').length}
                </div>
                <div className="home-page__stat-label">Active Games</div>
              </div>
            </Card>
            <Card className="home-page__stat-card">
              <div className="home-page__stat">
                <div className="home-page__stat-number">
                  {games.filter((g) => g.status === 'finished').length}
                </div>
                <div className="home-page__stat-label">Completed Games</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
