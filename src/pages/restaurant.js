import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import restau from '../images/restau.jpg';

const Restaurant = () => {
  return (
    <Layout>
      <RestaurantContainer>
        <RestaurtantContent>
          description du restau nombre place
        </RestaurtantContent>

        <RestaurantImage src={restau} alt='' />
      </RestaurantContainer>

      <MenuContainer></MenuContainer>

      <p>menu</p>
    </Layout>
  );
};

const RestaurantContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  height: 100vh;
`;

const RestaurantImage = styled.img`
  grid-column-start: span 10;
  grid-column-end: span 10;
  height: 60vh;
  width: 100%;
`;
const RestaurtantContent = styled.p`
  grid-column-start: span 2;
  grid-column-end: span 2;
  border: 1px solid black;
  background: var(--clr-white);
`;

const MenuContainer = styled.section``;

export default Restaurant;
