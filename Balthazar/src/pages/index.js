import * as React from 'react';

import { Router } from '@reach/router';

import '../styles/index.css';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Origins from '../components/origins';
import MenuFumoir from './menufumoir';
import Products from './products';

const IndexPage = () => {
  return (
    <Layout>
      <Router basepath='/app'>
        <Products path='/products' />
        <MenuFumoir path='/menufumoir' />
      </Router>
      <Hero />
      <Origins />
    </Layout>
  );
};

export default IndexPage;
