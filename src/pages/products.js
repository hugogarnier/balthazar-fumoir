import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Products = () => {
  return (
    <Layout>
      <>
        Nos produits
        <Link to='/'>Home</Link>
      </>
    </Layout>
  );
};

export default Products;
