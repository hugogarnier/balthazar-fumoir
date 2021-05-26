import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Navigation from './NavigationDesktop';
import logo from '../../../images/logo_fumoir.svg';

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
  height: auto;
  width: 18.75rem;

  @media screen and (max-width: 910px) {
    width: 80%;
  }
`;

export default DesktopMenu;
