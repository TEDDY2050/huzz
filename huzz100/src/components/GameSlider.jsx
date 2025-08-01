import React from 'react';
import '../styles/GameSlider.css';
const games = [
  { title: 'SYNTH' },
  { title: 'DIGITAL ARENA' },
  { title: 'CYBER HUZZ' },
  { title: 'SKY DRIFT' },
  { title: 'ROGUE ALIEN' },
  { title: 'BATTLE SYNTH' },
  { title: 'DIGITAL ARENA' },
  { title: 'SYNTH' },
];

function SteamSlider() {
  // Repeat the game list 3 times for smooth infinite scroll
  const scrollingGames = [...games, ...games, ...games];

  return (
    <div className="steam-slider-wrapper">
      <h2 className="slider-title">🎮 Trending Games</h2>
      <div className="steam-slider">
        <div className="slider-track">
          {scrollingGames.map((game, index) => (
            <div className="game-card" key={index}>
              <div className="game-thumbnail" />
              <p>{game.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SteamSlider;
