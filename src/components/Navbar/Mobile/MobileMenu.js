import React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { MenuToggle } from './MenuToggle';
import Navigation from './Navigation';
import logo from '../../../images/mobile_logo_fumoir.png';

const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <Link to='/'>
        <Logo src={logo} alt='logo fumoir' />
      </Link>

      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={menuTransition}
      >
        <Navigation isOpen={isOpen} />
      </MenuContainer>
    </HamburgerMenuContainer>
  );
};

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const MenuContainer = styled(motion.div)`
  min-width: 18.75rem;
  width: 100vw;
  max-width: 50%;
  height: 100vh;
  background-color: var(--clr-secondary);
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

const Logo = styled.img`
  height: 2.5rem;
  width: 5.625rem;
`;

const menuVariants = {
  open: {
    transform: 'translateX(3%)',
  },
  closed: {
    transform: 'translateX(103%)',
  },
};

export default MobileMenu;
