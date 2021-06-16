import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Card from '../components/card';
import Layout from '../components/layout';

const Products = ({ data }) => {
  // const [option, setOption] = useState('');
  const { products } = data.allDataJson.edges[0].node;

  // const handleChange = (e) => {
  //   setOption(e.target.value);
  // };

  return (
    <Layout>
      {/* <div>
        <select value={option} onChange={(e) => handleChange(e)}>
          <option select value=''>
            Tous
          </option>
          <option value='boisson'>Boisson</option>
          <option value='bocal'>Bocal</option>
        </select>
      </div> */}
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

        {/* {products.items
          .filter((obj) => obj.type === option)
          .map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={getImage(item.image)}
              price={item.price}
              description={item.description}
            />
          ))} */}
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
