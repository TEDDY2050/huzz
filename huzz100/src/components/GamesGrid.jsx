import '../styles/gamegrid.css';
import { Link } from 'react-router-dom';
import snakeImage from '../glogos/snake.png';

function GamesGrid() {
  const games = [
    // Local/Built games
    { title: 'Snake', image: snakeImage, link: '/game/snake', type: 'local' },
    { title: 'Flappy Bird', image: '/flappybird.png', link: '/game/flappybird', type: 'local' },
    { title: 'Tic Tac Toe', image: '/tictactoe.png', link: '/game/tictactoe', type: 'local' },
    
    // Classic Arcade Games
    { title: 'Tetris', image: '/tetris.png', link: '/game/tetris', type: 'api' },
    { title: '2048', image: '/2048.png', link: '/game/2048', type: 'api' },
    { title: 'Pacman', image: '/pacman.png', link: '/game/pacman', type: 'api' },
    { title: 'Space Invaders', image: '/spaceinvaders.png', link: '/game/spaceinvaders', type: 'api' },
    { title: 'Frogger', image: '/frogger.png', link: '/game/frogger', type: 'api' },
    { title: 'Breakout', image: '/breakout.png', link: '/game/breakout', type: 'api' },
    { title: 'Asteroids', image: '/asteroids.png', link: '/game/asteroids', type: 'api' },
    { title: 'Pong', image: '/pong.png', link: '/game/pong', type: 'api' },
    { title: 'Centipede', image: '/centipede.png', link: '/game/centipede', type: 'api' },
    
    // Puzzle Games
    { title: 'Sudoku', image: '/sudoku.png', link: '/game/sudoku', type: 'api' },
    { title: 'Crossword', image: '/crossword.png', link: '/game/crossword', type: 'api' },
    { title: 'Sliding Puzzle', image: '/sliding.png', link: '/game/sliding', type: 'api' },
    { title: 'Rubiks Cube', image: '/rubiks.png', link: 'https://rubikscubeapi.herokuapp.com', type: 'api' },
    { title: 'Chess', image: '/chess.png', link: '/game/chess', type: 'api' },
    { title: 'Checkers', image: '/checkers.png', link: '/game/checkers', type: 'api' },
    
    // Action Games
    { title: 'Missile Command', image: '/missile.png', link: '/game/missile', type: 'api' },
    { title: 'Defender', image: '/defender.png', link: '/game/defender', type: 'api' },
    { title: 'Galaga', image: '/galaga.png', link: '/game/galaga', type: 'api' },
    { title: 'Dig Dug', image: '/digdug.png', link: '/game/digdug', type: 'api' },
    { title: 'Q*bert', image: '/qbert.png', link: '/game/qbert', type: 'api' },
    { title: 'Donkey Kong', image: '/donkeykong.png', link: '/game/donkeykong', type: 'api' },
    
    // Racing Games
    { title: 'Racing', image: '/racing.png', link: '/game/racing', type: 'api' },
    { title: 'Moto X3M', image: '/motox3m.png', link: '/game/motox3m', type: 'api' },
    { title: 'Traffic Racer', image: '/traffic.png', link: '/game/traffic', type: 'api' },
    
    // Platform Games
    { title: 'Super Mario Bros', image: '/mario.png', link: '/game/mario', type: 'api' },
    { title: 'Sonic', image: '/sonic.png', link: '/game/sonic', type: 'api' },
    { title: 'Mega Man', image: '/megaman.png', link: '/game/megaman', type: 'api' },
    
    // Strategy Games
    { title: 'Tower Defense', image: '/tower.png', link: '/game/tower', type: 'api' },
    { title: 'Risk', image: '/risk.png', link: '/game/risk', type: 'api' },
    { title: 'Civilization', image: '/civ.png', link: '/game/civ', type: 'api' },
    
    // Card Games
    { title: 'Solitaire', image: '/solitaire.png', link: '/game/solitaire', type: 'api' },
    { title: 'Blackjack', image: '/blackjack.png', link: '/game/blackjack', type: 'api' },
    { title: 'Poker', image: '/poker.png', link: '/game/poker', type: 'api' },
    { title: 'Hearts', image: '/hearts.png', link: '/game/hearts', type: 'api' },
    
    // Sports Games
    { title: 'Basketball', image: '/basketball.png', link: '/game/basketball', type: 'api' },
    { title: 'Football', image: '/football.png', link: '/game/football', type: 'api' },
    { title: 'Tennis', image: '/tennis.png', link: '/game/tennis', type: 'api' },
    { title: 'Golf', image: '/golf.png', link: '/game/golf', type: 'api' },
    
    // Casual Games
    { title: 'Bubble Shooter', image: '/bubble.png', link: '/game/bubble', type: 'api' },
    { title: 'Match 3', image: '/match3.png', link: '/game/match3', type: 'api' },
    { title: 'Bejeweled', image: '/bejeweled.png', link: '/game/bejeweled', type: 'api' },
    { title: 'Candy Crush', image: '/candy.png', link: '/game/candy', type: 'api' },
    
    // Retro Games
    { title: 'Pitfall', image: '/pitfall.png', link: '/game/pitfall', type: 'api' },
    { title: 'Adventure', image: '/adventure.png', link: '/game/adventure', type: 'api' },
    { title: 'Joust', image: '/joust.png', link: '/game/joust', type: 'api' },
    { title: 'Robotron', image: '/robotron.png', link: '/game/robotron', type: 'api' },
    
    // Modern Classics
    { title: 'Geometry Dash', image: '/geometry.png', link: '/game/geometry', type: 'api' },
    { title: 'Temple Run', image: '/temple.png', link: '/game/temple', type: 'api' },
    { title: 'Subway Surfers', image: '/subway.png', link: '/game/subway', type: 'api' },
    { title: 'Cut the Rope', image: '/rope.png', link: '/game/rope', type: 'api' },
    
    // IO Games
    { title: 'Agar.io', image: '/agar.png', link: '/game/agar', type: 'api' },
    { title: 'Slither.io', image: '/slither.png', link: '/game/slither', type: 'api' },
    { title: 'Diep.io', image: '/diep.png', link: '/game/diep', type: 'api' },
    
    // Battle Games
    { title: 'Battle City', image: '/battle.png', link: '/game/battle', type: 'api' },
    { title: 'Contra', image: '/contra.png', link: '/game/contra', type: 'api' },
    { title: 'Metal Slug', image: '/metal.png', link: '/game/metal', type: 'api' },
    
    // More Puzzle
    { title: 'Mahjong', image: '/mahjong.png', link: '/game/mahjong', type: 'api' },
    { title: 'Jigsaw', image: '/jigsaw.png', link: '/game/jigsaw', type: 'api' },
    { title: 'Word Search', image: '/wordsearch.png', link: '/game/wordsearch', type: 'api' },
    
    // Simulation
    { title: 'SimCity', image: '/simcity.png', link: '/game/simcity', type: 'api' },
    { title: 'The Sims', image: '/sims.png', link: '/game/sims', type: 'api' },
    { title: 'RollerCoaster', image: '/roller.png', link: '/game/roller', type: 'api' },
    
    // Fighting Games
    { title: 'Street Fighter', image: '/streetfighter.png', link: '/game/streetfighter', type: 'api' },
    { title: 'Mortal Kombat', image: '/mk.png', link: '/game/mk', type: 'api' },
    { title: 'Tekken', image: '/tekken.png', link: '/game/tekken', type: 'api' },
    
    // Adventure
    { title: 'Zelda', image: '/zelda.png', link: '/game/zelda', type: 'api' },
    { title: 'Metroid', image: '/metroid.png', link: '/game/metroid', type: 'api' },
    { title: 'Castlevania', image: '/castlevania.png', link: '/game/castlevania', type: 'api' },
    
    // More Casual
    { title: 'Plants vs Zombies', image: '/pvz.png', link: '/game/pvz', type: 'api' },
    { title: 'Angry Birds', image: '/angrybirds.png', link: '/game/angrybirds', type: 'api' },
    { title: 'Fruit Ninja', image: '/fruit.png', link: '/game/fruit', type: 'api' },
    
    // Educational
    { title: 'Math Games', image: '/math.png', link: '/game/math', type: 'api' },
    { title: 'Typing Game', image: '/typing.png', link: '/game/typing', type: 'api' },
    { title: 'Geography', image: '/geography.png', link: '/game/geography', type: 'api' },
    
    // Music Games
    { title: 'Guitar Hero', image: '/guitar.png', link: '/game/guitar', type: 'api' },
    { title: 'Piano Tiles', image: '/piano.png', link: '/game/piano', type: 'api' },
    { title: 'Beat Saber', image: '/beat.png', link: '/game/beat', type: 'api' },
    
    // More Sports
    { title: 'Baseball', image: '/baseball.png', link: '/game/baseball', type: 'api' },
    { title: 'Hockey', image: '/hockey.png', link: '/game/hockey', type: 'api' },
    { title: 'Bowling', image: '/bowling.png', link: '/game/bowling', type: 'api' },
    
    // Shooter Games
    { title: 'Duck Hunt', image: '/duck.png', link: '/game/duck', type: 'api' },
    { title: 'Time Crisis', image: '/crisis.png', link: '/game/crisis', type: 'api' },
    { title: 'House of Dead', image: '/house.png', link: '/game/house', type: 'api' },
    
    // RPG Games
    { title: 'Final Fantasy', image: '/ff.png', link: '/game/ff', type: 'api' },
    { title: 'Dragon Quest', image: '/dragon.png', link: '/game/dragon', type: 'api' },
    { title: 'Pokemon', image: '/pokemon.png', link: '/game/pokemon', type: 'api' },
    
    // Platformers
    { title: 'Rayman', image: '/rayman.png', link: '/game/rayman', type: 'api' },
    { title: 'Crash Bandicoot', image: '/crash.png', link: '/game/crash', type: 'api' },
    { title: 'Spyro', image: '/spyro.png', link: '/game/spyro', type: 'api' },
    
    // Mind Games
    { title: 'Brain Training', image: '/brain.png', link: '/game/brain', type: 'api' },
    { title: 'Memory Game', image: '/memory.png', link: '/game/memory', type: 'api' },
    { title: 'Logic Puzzles', image: '/logic.png', link: '/game/logic', type: 'api' },
    
    // Driving Games
    { title: 'Need for Speed', image: '/nfs.png', link: '/game/nfs', type: 'api' },
    { title: 'Gran Turismo', image: '/gt.png', link: '/game/gt', type: 'api' },
    { title: 'Mario Kart', image: '/mariokart.png', link: '/game/mariokart', type: 'api' },
    
    // Horror Games
    { title: 'Resident Evil', image: '/re.png', link: '/game/re', type: 'api' },
    { title: 'Silent Hill', image: '/silent.png', link: '/game/silent', type: 'api' },
    { title: 'Dead Space', image: '/deadspace.png', link: '/game/deadspace', type: 'api' },
    
    // Bonus Games to reach 100+
    { title: 'Lemmings', image: '/lemmings.png', link: '/game/lemmings', type: 'api' },
    { title: 'Worms', image: '/worms.png', link: '/game/worms', type: 'api' },
    { title: 'Bomberman', image: '/bomberman.png', link: '/game/bomberman', type: 'api' },
    { title: 'Pac-Man Jr', image: '/pacjr.png', link: '/game/pacjr', type: 'api' },
  ];

  return (
    <div className="games-section">
      <div className="games-grid">
        {games.map((game, index) => {
          const cardContent = (
            <div key={index} className="game-card">
              <img src={game.image} alt={game.title} onError={(e) => {
                e.target.src = 'https://via.placeholder.com/120x120/333/fff?text=' + game.title.replace(' ', '+');
              }} />
              <p>{game.title}</p>
              {game.type === 'api' && <span className="api-badge">Online</span>}
              {game.type === 'local' && <span className="local-badge">Built-in</span>}
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