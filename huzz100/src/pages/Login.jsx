import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import '../styles/AuthModern.css';
import SplineBackground from '../components/SplineBackground';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    alert('Logged in successfully!');
  };

  return (
    <div className="auth-full-page">
      <Navbar />
      <SplineBackground />

      <div className="auth-center-content">
        <div className="auth-box">
          <h2>Welcome Back</h2>
          {error && <p className="error-message">{error}</p>}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" onClick={handleLogin}>
            Log In
          </button>

          <p className="switch-link">
            New here? <a href="/signup">Create Account</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
