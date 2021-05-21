import * as React from 'react';
import { Router } from '@reach/router';

import '../styles/index.css';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Origins from '../components/Origins';
import Restaurant from './restaurant';
import Products from './products';
import Contact from './contact';

// markup
const IndexPage = () => {
  return (
    <Layout>
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
