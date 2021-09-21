import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Card from '../components/card';
// const Card = React.lazy(() => import('../components/card'));

const Products = ({ data }) => {
  const [option, setOption] = useState('');
  const { products } = data.allDataJson.edges[0].node;

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <Layout>
      <ProductGroup>
        <FilterProductContainer>
          <SelectContainer value={option} onChange={(e) => handleChange(e)}>
            <FilterOption select value=''>
              Tous
            </FilterOption>
            <FilterOption value='bocal'>Bocal</FilterOption>
            <FilterOption value='boisson'>Boisson</FilterOption>
            <FilterOption value='epice'>Epice</FilterOption>
            <FilterOption value='poisson'>Poisson</FilterOption>
            <FilterOption value='viande'>Viande</FilterOption>
          </SelectContainer>
        </FilterProductContainer>

        {/* <Suspense fallback={<LazyComponent>Loading...</LazyComponent>}> */}
        <ProductsContainer>
          {option === ''
            ? products.items.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  image={getImage(item.image)}
                  price={item.price}
                  description={item.description}
                />
              ))
            : products.items
                .filter((obj) => obj.type === option)
                .map((item) => (
                  <Card
                    key={item.id}
                    title={item.title}
                    image={getImage(item.image)}
                    price={item.price}
                    description={item.description}
                  />
                ))}
        </ProductsContainer>
        {/* </Suspense> */}
      </ProductGroup>
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
              type
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

const ProductGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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

const FilterProductContainer = styled.div`
  width: 18rem;
  min-width: 15rem;
  margin: 0 auto;
  font-size: 1.1rem;
  padding: 0.625rem 0.5rem 0.625rem 0.875rem;
  border: 0.063rem solid var(--clr-secondary);
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
`;

const SelectContainer = styled.select`
  background: transparent;
  line-height: 1;
  border: 0;
  padding: 0;
  border-radius: 0;
  width: 100%;
  position: relative;
  z-index: 10;
  font-size: 1em;
  outline: none;
`;

const FilterOption = styled.option`
  background-color: var(--clr-white);
`;

// const LazyComponent = styled.div`
//   height: 100vh;
// `;

export default Products;
