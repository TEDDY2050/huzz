import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>HUZZ Games</h3>
        <p>Bringing you the best digital games from around the world.</p>
        <p>HUZZ Corporation. All rights reserved.</p>
      </div>

      <div className="footer-section">
        <h4>Company</h4>
        <a href="/about">About Us</a>
        <a href="/careers">Careers</a>
        <a href="/contact">Contact Us</a>
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
      </div>

      <div className="footer-section">
        <h4>Headquarters</h4>
        <p>Amroli, Surat, India</p>
        <p>Email: 100@huzzgames.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>
    </footer>
  );
}

export default Footer;
