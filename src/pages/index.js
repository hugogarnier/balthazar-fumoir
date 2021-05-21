import * as React from 'react';
import { Router } from '@reach/router';
import { useMediaQuery } from 'react-responsive';

import '../styles/index.css';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Origins from '../components/origins';
import Restaurant from './restaurant';
import Products from './products';
import Contact from './contact';

// markup
const IndexPage = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <Layout isMobile={isMobile}>
      <Router basepath='/app'>
        <Products path='/products' />
        <Restaurant path='/restaurant' />
        <Contact path='/contact' />
      </Router>
      <Hero />
      <Origins />
    </Layout>
  );
};

export default IndexPage;
