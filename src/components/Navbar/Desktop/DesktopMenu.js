import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Navigation from './NavigationDesktop';
import logo from '../../../images/logo_fumoir.png';

const DesktopMenu = () => {
  return (
    <>
      <Link to='/'>
        <Logo src={logo} alt='logo fumoir' />
      </Link>
      <Navigation />
    </>
  );
};

const Logo = styled.img`
  height: 4.063rem;
  width: 18.75rem;
`;

export default DesktopMenu;
