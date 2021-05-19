import React from 'react';
import Card from '../components/card';

import Layout from '../components/layout';
import '../styles/products.css';

const Products = () => {
  return (
    <Layout>
      <section className='products_container'>
        <h3 className='products_title'>Titre</h3>
        <div className='products_cards'>
          <Card />
        </div>
        Nos produits Grid to present products faire component card
      </section>
    </Layout>
  );
};

export default Products;
