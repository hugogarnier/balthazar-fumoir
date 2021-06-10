import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Layout from '../components/Layout';
import { products } from '../data/products';

const Products = () => {
  return (
    <Layout>
      <ProductsContainer>
        {products.map((val, index) => (
          <Card
            key={index}
            title={val.title}
            image={val.image}
            price={val.price}
            description={val.description}
          />
        ))}
      </ProductsContainer>
    </Layout>
  );
};

const ProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
  margin: 3rem 0;

  > h3 {
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Products;
