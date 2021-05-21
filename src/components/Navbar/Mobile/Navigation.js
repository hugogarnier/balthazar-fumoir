import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};

const Navigation = ({ isOpen }) => {
  return (
    <NavMenuContainer>
      <NavList>
        {navigation.map((val, index) => (
          <NavLink
            key={index}
            initial={false}
            animate={isOpen ? 'show' : 'hide'}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.3, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.05, duration: 0.05 },
              },
            }}
          >
            <NavLinkActive to={val.href}>{val.name}</NavLinkActive>
          </NavLink>
        ))}
      </NavList>
    </NavMenuContainer>
  );
};

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
`;

const NavList = styled.ul`
  padding: 0 0.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(motion.li)`
  padding: 2rem 0;
  font-size: 1.5rem;
`;

const NavLinkActive = styled(Link)`
  transition: all 200ms ease-in-out;
  color: var(--clr-white);
  &:hover {
    color: #555;
  }
`;

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

export default Navigation;
