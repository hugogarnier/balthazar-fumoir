import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { navigation } from '../../../data/navigation';

const Navigation = () => {
  return (
    <>
      <NavList>
        {navigation.map((val, index) => (
          <NavLink key={index}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <NavLinkActive to={val.href}>{val.name}</NavLinkActive>
            </motion.div>
          </NavLink>
        ))}
      </NavList>
    </>
  );
};

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavLink = styled(motion.li)`
  padding: 0 1rem;
  font-size: 1.2rem;
`;

const NavLinkActive = styled(Link)`
  color: var(--clr-primary);
  &:hover {
    color: var(--clr-secondary);
  }
`;

export default Navigation;
