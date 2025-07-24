import '../styles/hero.css';

function Hero({ onExploreClick }) {
  return (
    <section className="hero-section">
      <h1>Welcome to Huzz</h1>
      <p>Play, relax, and explore endless fun — All in one place.</p>
      <button 
        onClick={onExploreClick} 
        className="explore-button"
      >
        Explore Games
      </button>
    </section>
  );
}

export default Hero;