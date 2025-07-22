import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/Navbar.css';
import SplineBackground from './SplineBackground';

function Navbar() {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);

  const toggleAccountDropdown = () => {
    setAccountDropdown(!accountDropdown);
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdown(!categoriesDropdown);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">HUZZ</Link>

        <div className="categories-dropdown">
          <button onClick={toggleCategoriesDropdown} className="nav-link">
            Categories
          </button>
          {categoriesDropdown && (
            <div className="dropdown-menu">
              <Link to="/category/action">Action</Link>
              <Link to="/category/puzzle">Puzzle</Link>
              <Link to="/category/arcade">Arcade</Link>
              <Link to="/category/strategy">Strategy</Link>
              <Link to="/category/racing">Racing</Link>
            </div>
          )}
        </div>

        <Link to="/favourites" className="nav-link">Favourites</Link>
        <Link to="/trending" className="nav-link">Trending</Link>
      </div>

      <div className="nav-right">
        <input type="text" placeholder="Search games..." className="search-bar" />

        <div className="account-section">
          <FaUserCircle size={28} color="#fff" onClick={toggleAccountDropdown} className="user-icon" />
          {accountDropdown && (
            <div className="account-dropdown">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
