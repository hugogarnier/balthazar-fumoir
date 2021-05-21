import React, { useState } from 'react';
import styled from 'styled-components';
// import { useMediaQuery } from 'react-responsive';

import MobileMenu from './Mobile/MobileMenu';
import DesktopMenu from './Desktop/DesktopMenu';

const Navbar = () => {
  const [resize, setResize] = useState(false);
  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    const changeMenu = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setResize(false);
      } else {
        setResize(true);
      }
    };
    window.addEventListener('resize', changeMenu);
  }

  // const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <NavContainer>{resize ? <MobileMenu /> : <DesktopMenu />}</NavContainer>
  );

  // const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  height: 5rem;
`;

export default Navbar;
