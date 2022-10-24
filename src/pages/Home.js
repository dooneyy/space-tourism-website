import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      <div className="home-container">
        <div className="home-container_travel">
          <p className="heading heading-5">SO, YOU WANT TO TRAVEL TO</p>
          <p className="home-container_travel-heading heading-1">SPACE</p>
          <p className="body-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to='/' className="home-container_explore heading-4">EXPLORE</Link>
      </div>
    </div>
  );
};

export default Home;
