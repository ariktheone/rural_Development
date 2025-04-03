import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import './Header.css';

function Header() {
  const location = useLocation();
  
  // Function to check if a path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">Rural Development Initiative</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="main-nav">
            <ul>
              <li className={isActive('/') ? 'active' : ''}>
                <Link to="/">Home</Link>
              </li>
              <li className={isActive('/news') ? 'active' : ''}>
                <Link to="/news">News</Link>
              </li>
              <li className={isActive('/programs') ? 'active' : ''}>
                <Link to="/programs">Programs</Link>
              </li>
              <li className={isActive('/about') ? 'active' : ''}>
                <Link to="/about">About</Link>
              </li>
              <li className={isActive('/contact') ? 'active' : ''}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu - Only visible on smaller screens */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;