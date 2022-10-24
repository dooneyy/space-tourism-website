import React from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/shared/logo.svg';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  return (
    <div className="navigation">
      <div className="navigation-logo">
      <Link to='/'><Logo /></Link>
      </div>

      <ul className="navigation-item">
        <Link
          to="/"
          className={`nav-text ${location.pathname === '/' ? 'active' : 'hover'}`}
        >
          <span>00</span>Home
        </Link>
        <Link
          to="/destination"
          className={`nav-text ${location.pathname === '/destination' ? 'active' : 'hover'}`}
        >
          <span>01</span>Destination
        </Link>
        <Link
          to="/crew"
          className={`nav-text ${location.pathname === '/crew' ? 'active' : 'hover'}`}
        >
          <span>02</span>Crew
        </Link>
        <Link
          to="/technology"
          className={`nav-text ${location.pathname === '/technology' ? 'active' : 'hover'}`}
        >
          <span>03</span>Technology
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
