import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';

import '../styles/header.css';
import logo from '../images/logo_fumoir.png';
import logoMobile from '../images/mobile_logo_fumoir.png';

const Navbar = ({ open, toggleBurger }) => {
  const navigation = [
    {
      name: 'Accueil',
      href: '/',
    },
    {
      name: 'Nos Produits',
      href: '/products',
    },
    {
      name: 'Restaurant',
      href: '/restaurant',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  const [logoChange, setLogoChange] = useState(false);
  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    const changeLogoColor = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        console.log('Screen width is at least 768px');
        setLogoChange(false);
      } else {
        console.log('Screen less than 768px');
        setLogoChange(true);
      }
    };
    window.addEventListener('resize', changeLogoColor);
  }

  return (
    <header>
      {/* <nav className={colorChange ? 'nav colorChange' : 'nav'}> */}
      <nav>
        <Link className='logo' to='/'>
          <img src={logoChange ? logoMobile : logo} alt='logo fumoir' />
        </Link>
        <ul className={open ? 'nav_links show-nav' : 'nav_links hide-nav'}>
          {navigation.map((val, index) => (
            <li className='nav_items' key={index}>
              <Link to={val.href} className='nav_item_link'>
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <FaTimes
          className='burger active'
          onClick={() => toggleBurger(false)}
        />
      ) : (
        <FaBars className='burger' onClick={() => toggleBurger(true)} />
      )}
    </header>
  );
};

export default Navbar;
