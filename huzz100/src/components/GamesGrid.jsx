import '../styles/gamegrid.css';
import { Link } from 'react-router-dom';
import snakeImage from '../glogos/snake.png';
import SplineBackground from '../components/SplineBackground';

function GamesGrid() {
  const games = [
    // Your existing games
    { title: 'Snake', image: snakeImage, link: '/game/snake', type: 'local' },
    { title: 'Flappy Bird', image: '/flappybird.png', link: '/game/flappybird', type: 'local' },
    
    // API/External games
    { title: 'Tetris', image: '/tetris.png', link: '/game/tetris', type: 'api' },
    { title: '2048', image: '/2048.png', link: '/game/2048', type: 'api' },
    { title: 'Pacman', image: '/pacman.png', link: '/game/pacman', type: 'api' },
    { title: 'Space Invaders', image: '/spaceinvaders.png', link: '/game/spaceinvaders', type: 'api' },
    { title: 'Frogger', image: '/frogger.png', link: '/game/frogger', type: 'api' },
    { title: 'Breakout', image: '/breakout.png', link: '/game/breakout', type: 'api' },
    { title: 'Asteroids', image: '/asteroids.png', link: '/game/asteroids', type: 'api' },
    { title: 'Pong', image: '/pong.png', link: '/game/pong', type: 'api' },
    { title: 'Centipede', image: '/centipede.png', link: '/game/centipede', type: 'api' },
  ];

  return (
    <SplineBackground>
      <div className="games-section">
        <h2>Choose Your Game</h2>
        <div className="games-grid">
          {games.map((game, index) => {
            const cardContent = (
            <div key={index} className="game-card">
              <img src={game.image} alt={game.title} />
              <p>{game.title}</p>
              {game.type === 'api' && <span className="api-badge">Online</span>}
            </div>
          );

          return game.link ? (
            <Link to={game.link} key={index} className="game-link">
              {cardContent}
            </Link>
          ) : cardContent;
        })}
      </div>
    </div>
  );
}

export default GamesGrid;