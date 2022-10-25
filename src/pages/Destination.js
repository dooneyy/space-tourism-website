import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Moon from '../assets/destination/image-moon.webp';
import Mars from '../assets/destination/image-mars.webp';
import Europa from '../assets/destination/image-europa.webp';
import Titan from '../assets/destination/image-titan.webp';
const Destination = () => {
  const [activeLinks, setActiveLinks] = useState('moon');

  const images = () => {
    switch (activeLinks) {
      case 'moon':
        return <img src={Moon} alt="moon" />;

      case 'mars':
        return <img src={Mars} alt="mars" />;

      case 'europa':
        return <img src={Europa} alt="europa" />;

      case 'titan':
        return <img src={Titan} alt="titan" />;

      default:
        return <img src={Moon} alt="moon" />;
    }
  };

  const headingText = () => {
    switch (activeLinks) {
      case 'moon':
        return <p className="heading-2 planet-name">Moon</p>;

      case 'mars':
        return <p className="heading-2 planet-name">Mars</p>;

      case 'europa':
        return <p className="heading-2 planet-name">Europa</p>;

      case 'titan':
        return <p className="heading-2 planet-name">Titan</p>;

      default:
        return <p className="heading-2 planet-name">Mars</p>;
    }
  };

  const bodyText = () => {
    switch (activeLinks) {
      case 'moon':
        return (
          <p className="body-text planet-desc">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        );

      case 'mars':
        return (
          <p className="body-text planet-desc">
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
        );

      case 'europa':
        return (
          <p className="body-text planet-desc">
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
        );

      case 'titan':
        return (
          <p className="body-text planet-desc">
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
        );

      default:
        return (
          <p className="body-text planet-desc">
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
        );
    }
  };

  return (
    <div className="destination">
      <Navigation />
      <div className="destination-container">
        <p className="destination-container_prompt heading-5">
          <span>01</span>PICK YOUR DESTINATION
        </p>
        <div className="destination-container_body">
          <div className="destination-container_body-image">
            {images(activeLinks)}
          </div>
          <div className="destination-container_body-details">
            <div className="details-nav">
              <ul>
                <Link
                  className={`nav-text ${
                    activeLinks === 'moon' ? 'activeLink' : 'hoverLink'
                  }`}
                  onClick={() => setActiveLinks('moon')}
                >
                  MOON
                </Link>
                <Link
                  className={`nav-text ${
                    activeLinks === 'mars' ? 'activeLink' : 'hoverLink'
                  }`}
                  onClick={() => setActiveLinks('mars')}
                >
                  MARS
                </Link>
                <Link
                  className={`nav-text ${
                    activeLinks === 'europa' ? 'activeLink' : 'hoverLink'
                  }`}
                  onClick={() => setActiveLinks('europa')}
                >
                  EUROPA
                </Link>
                <Link
                  className={`nav-text ${
                    activeLinks === 'titan' ? 'activeLink' : 'hoverLink'
                  }`}
                  onClick={() => setActiveLinks('titan')}
                >
                  TITAN
                </Link>
              </ul>
            </div>
            <div className="planet">
              {headingText(activeLinks)}
              {bodyText(activeLinks)}
              <div className="planet_line"></div>
              <div className="planet-information">
                <div className='mr-68'>
                  <p className="subheading-2 info-heading">AVG. DISTANCE</p>
                  <p className="subheading-1">
                    {activeLinks === 'moon' && '384,400 km'}
                    {activeLinks === 'mars' && '225 mil. km'}
                    {activeLinks === 'europa' && '628 mil. km'}
                    {activeLinks === 'titan' && '1.6 bil. km'}</p>
                </div>
                <div>
                  <p className="subheading-2 info-heading">Est. travel time</p>
                  <p className="subheading-1">
                  {activeLinks === 'moon' && '3 days'}
                  {activeLinks === 'mars' && '9 months'}
                  {activeLinks === 'europa' && '3 years'}
                  {activeLinks === 'titan' && ' 7 years'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
