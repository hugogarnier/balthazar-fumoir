import React from 'react';
import styled from 'styled-components';
// import { useMediaQuery } from 'react-responsive';

import MobileMenu from './Mobile/MobileMenu';
import DesktopMenu from './Desktop/DesktopMenu';

const Navbar = ({ screenSize }) => {
  // const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <NavContainer>
      {screenSize.width < 768 ? <MobileMenu /> : <DesktopMenu />}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  height: 5rem;
`;

export default Navbar;
