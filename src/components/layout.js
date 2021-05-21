import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar/Navbar';
import Footer from './footer';

const Main = styled.main`
  padding: 0.5rem calc((100vw - 1000px) / 2);

  @media screen and (max-width: 500px) {
    padding: 0.5rem calc((100vw - 500px) / 2);
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem calc((100vw - 768px) / 2);
  }
`;

const Layout = ({ children, screenSize }) => {
  return (
    <>
      <Navbar screenSize={screenSize} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
