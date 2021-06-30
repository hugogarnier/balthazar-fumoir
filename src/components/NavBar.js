import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';

import logo from '../images/logo_fumoir.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer open={isOpen}>
      <Link to='/'>
        <Logo src={logo} alt='logo fumoir' />
      </Link>

      <NavList open={isOpen}>
        <NavItems open={isOpen}>
          <NavLink to='/' onClick={OpenBurger}>
            Accueil
          </NavLink>
        </NavItems>
        <NavItems open={isOpen}>
          <NavLink to='/products' onClick={OpenBurger}>
            Nos Produits
          </NavLink>
        </NavItems>
        <NavItems open={isOpen}>
          <NavLink to='/menufumoir' onClick={OpenBurger}>
            Restaurant
          </NavLink>
        </NavItems>
      </NavList>
      {isOpen ? (
        <Close onClick={OpenBurger} />
      ) : (
        <Burger onClick={OpenBurger} />
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    margin: 1rem 2rem;
  }
`;

const Logo = styled.img`
  width: 8rem;
  height: auto;

  @media screen and (min-width: 980px) {
    width: 15rem;
  }
`;

const NavList = styled.ul`
  position: absolute;
  left: ${(props) => (props.open ? 0 : -100)}%;
  top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  text-align: center;
  transition: 0.3s;
  box-shadow: 0 5px 2px -2px rgba(0, 0, 0, 0.05);
  background: white;

  @media screen and (min-width: 768px) {
    position: unset;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    box-shadow: none;
  }
`;

const NavItems = styled.li`
  padding: 1.5rem 0;

  @media screen and (min-width: 768px) {
    padding-left: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }

  &:hover {
    margin-top: -0.1rem;
    border-bottom: 0.1rem solid var(--clr-secondary);
    color: var(--clr-secondary);
  }
`;

const Burger = styled(FaBars)`
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Close = styled(FaTimes)`
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default Navbar;
