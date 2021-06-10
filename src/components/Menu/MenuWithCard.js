import React from 'react';
import styled from 'styled-components';

import {
  aperitif,
  assiette,
  biere,
  boisson,
  boissonChaude,
  cafe,
  dessert,
  divers,
  verre,
  vinBlanc,
  vinRose,
  vinRouge,
} from '../../data/menu';
import CardMenuTextDesc from './CardMenuTextDesc';
import CardMenuTextPrice from './CardMenuTextPrice';
import CardMenuCafe from './CardMenuCafe';
import CardMenuVin from './CardMenuVin';

const MenuWithCard = () => {
  return (
    <>
      <CardContainerAssiettes>
        <CardTitle>Les assiettes du Fumoir 14,90€</CardTitle>
        <CardMenuTextDesc items={assiette} fallback={'Loading...'} />
      </CardContainerAssiettes>
      <CardContainer>
        <CardTitle>Les apéritifs et digestifs</CardTitle>
        <CardMenuTextPrice items={aperitif} fallback={'Loading...'} />
      </CardContainer>
      <CardContainer>
        <CardTitle>Les boissons</CardTitle>
        <CardMenuTextPrice items={boisson} fallback={'Loading...'} />
      </CardContainer>
      <CardContainer>
        <CardTitle>Les boissons chaudes</CardTitle>
        <CardMenuTextPrice items={boissonChaude} fallback={'Loading...'} />
      </CardContainer>
      <CardContainer>
        <CardTitle>Dessert 7,50€</CardTitle>
        <CardMenuTextDesc items={dessert} fallback={'Loading...'} />
      </CardContainer>
      <CardContainer>
        <CardTitle>Les cafés accompagnés</CardTitle>
        <CardMenuCafe items={cafe} fallback={'Loading...'} />
      </CardContainer>
      <CardContainer>
        <CardTitle>Les bières et cidres</CardTitle>
        <CardBeerTitle>Bières Demmwel Bio</CardBeerTitle>
        <CardMenuTextPrice items={biere} fallback={'Loading...'} />
      </CardContainer>
      <CardContainerDivers>
        <CardTitle>Divers</CardTitle>
        <CardMenuTextPrice items={divers} fallback={'Loading...'} />
      </CardContainerDivers>
      <CardMenuVinGroup>
        <CardTitle>Vins</CardTitle>
        <CardMenuTextPrice items={verre} fallback={'Loading...'} />
        <CardMenuVinContainer>
          <CardMenuVinContent>
            <CardMenuVinTitle>Vin Rouge</CardMenuVinTitle>
            <CardMenuVin items={vinRouge} fallback={'Loading...'} />
          </CardMenuVinContent>
          <CardMenuVinContent>
            <CardMenuVinTitle>Vin Rose</CardMenuVinTitle>
            <CardMenuVin items={vinRose} fallback={'Loading...'} />
          </CardMenuVinContent>
          <CardMenuVinContent>
            <CardMenuVinTitle>Vin Blanc</CardMenuVinTitle>
            <CardMenuVin items={vinBlanc} fallback={'Loading...'} />
          </CardMenuVinContent>
        </CardMenuVinContainer>
      </CardMenuVinGroup>
    </>
  );
};

const CardContainer = styled.div`
  padding: 1rem 0;
  border-radius: 1rem;
  background: var(--clr-white);
`;

const CardTitle = styled.h1`
  padding: 1rem 0;
  text-align: center;
  font-size: 1rem;
`;

const CardContainerAssiettes = styled.div`
  padding: 1rem 0;
  grid-column: 1 / span 3;
  border-radius: 1rem;
  background: var(--clr-white);

  @media screen and (max-width: 768px) {
    grid-column: 1 / span 1;
  }
`;

const CardContainerDivers = styled.div`
  padding: 1rem 0;
  grid-column: 1 / span 3;
  border-radius: 1rem;
  background: var(--clr-white);

  @media screen and (max-width: 768px) {
    grid-column: 1 / span 1;
  }
`;

const CardMenuVinGroup = styled.div`
  grid-column: 1 / span 3;
  border-radius: 1rem;
  background: var(--clr-white);

  @media screen and (max-width: 768px) {
    grid-column: 1 / span 1;
  }
`;

const CardMenuVinContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardMenuVinContent = styled.div`
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const CardMenuVinTitle = styled.h3`
  font-size: 1rem;
`;

const CardBeerTitle = styled.p`
  text-align: center;
  padding-bottom: 1rem;
`;

export default MenuWithCard;
