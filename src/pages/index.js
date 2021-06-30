import * as React from 'react';

import { Router } from '@reach/router';

import '../styles/index.css';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Origins from '../components/origins';
import Restaurant from './restaurant';
import Products from './products';

const IndexPage = () => {
  return (
    <Layout>
      <Router basepath='/app'>
        <Products path='/products' />
        <Restaurant path='/menufumoir' />
      </Router>
      <Hero />
      <Origins />
    </Layout>
  );
};

export default IndexPage;
