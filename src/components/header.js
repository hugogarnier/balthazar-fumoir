import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';

import '../styles/header.css';
import logo from '../images/main_logo_fumoir.png';

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

  const [colorChange, setColorchange] = useState(false);
  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
  }

  return (
    <header>
      <nav className={colorChange ? 'nav colorChange' : 'nav'}>
        <Link className='logo' to='/'>
          <img src={logo} alt='logo fumoir' />
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
