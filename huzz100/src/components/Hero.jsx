import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <h1>Welcome to Huzz</h1>
      <p>Play, relax, and explore endless fun — All in one place.</p>
      <a href="../components/GameGrid.jsx" className="explore-button">
        Explore Games
      </a>
    </section>
  );
}

export default Hero;
