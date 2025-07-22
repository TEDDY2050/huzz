import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import '../styles/AuthModern.css';
import SplineBackground from '../components/SplineBackground';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    alert('Account created successfully!');
  };

  return (
    <div className="auth-full-page">
      <Navbar />
      <SplineBackground />

      <div className="auth-center-content">
        <div className="auth-box">
          <h2>Create Your Account</h2>
          {error && <p className="error-message">{error}</p>}

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="auth-btn" onClick={handleSignup}>
            Sign Up
          </button>

          <p className="switch-link">
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
