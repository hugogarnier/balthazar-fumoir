import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Card from '../components/Card';
import Layout from '../components/layout';

const Products = ({ data }) => {
  const info = data.allDataJson.edges[0].node;
  const { products } = info;

  return (
    <Layout>
      <ProductsContainer>
        {products.items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={getImage(item.image)}
            price={item.price}
            description={item.description}
          />
        ))}
      </ProductsContainer>
    </Layout>
  );
};

// Query file AllProducts.json
export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          products {
            name
            items {
              description
              price
              title
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
  margin: 3rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Products;
