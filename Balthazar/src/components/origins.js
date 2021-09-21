import React from 'react';
import styled from 'styled-components';
import { GiCampCookingPot } from '@react-icons/all-files/gi/GiCampCookingPot';
import { GiFrance } from '@react-icons/all-files/gi/GiFrance';
import { RiRestaurant2Fill } from '@react-icons/all-files/ri/RiRestaurant2Fill';

const OriginsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  height: 50vh;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

const OriginsItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const OriginsIcon = styled.div`
  font-size: 5rem;
`;

const OriginsContent = styled.div`
  padding: 1rem 2rem;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 3rem;
  }
`;

const Origins = () => {
  return (
    <OriginsContainer>
      <OriginsItems>
        <OriginsIcon>
          <GiCampCookingPot />
        </OriginsIcon>

        <OriginsContent>Produits fumés au bois de hêtre</OriginsContent>
      </OriginsItems>
      <OriginsItems>
        <OriginsIcon>
          <GiFrance />
        </OriginsIcon>

        <OriginsContent>Produits français</OriginsContent>
      </OriginsItems>
      <OriginsItems>
        <OriginsIcon>
          <RiRestaurant2Fill />
        </OriginsIcon>

        <OriginsContent>Service en continu</OriginsContent>
      </OriginsItems>
    </OriginsContainer>
  );
};

export default Origins;
