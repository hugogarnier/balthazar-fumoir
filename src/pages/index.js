import * as React from 'react';

import { Router } from '@reach/router';

import Layout from '../components/layout';
import Restaurant from './restaurant';
import Products from './products';
import Contact from './contact';

import '../styles/index.css';
import Hero from '../components/hero';
import Origins from '../components/origins';

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
