import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import ScrollToTop from '../utils/ScrollTop';

const Main = styled.main`
  padding: 1rem calc((100vw - 1000px) / 2);

  @media screen and (max-width: 500px) {
    padding: 1rem calc((100vw - 500px) / 2);
  }

  @media screen and (max-width: 768px) {
    padding: 1rem calc((100vw - 768px) / 2);
  }

  @media screen and (max-width: 1010px) {
    padding: 1rem 3rem;
  }
`;

const Layout = ({ children, screenSize }) => {
  return (
    <>
      <Navbar screenSize={screenSize} />
      <Main>{children}</Main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
