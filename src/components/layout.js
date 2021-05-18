import React from 'react';
import { useState } from 'react';

import '../styles/layout.css';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header open={isMenuOpen} toggleBurger={setIsMenuOpen} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
