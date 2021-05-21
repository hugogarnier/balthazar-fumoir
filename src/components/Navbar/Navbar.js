import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import MobileMenu from './Mobile/MobileMenu';
import DesktopMenu from './Desktop/DesktopMenu';

const Navbar = () => {
  // const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <NavContainer>
      <MediaQuery maxDeviceWidth={768}>
        <MobileMenu />
      </MediaQuery>
      <MediaQuery minDeviceWidth={769}>
        <DesktopMenu />
      </MediaQuery>
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
