import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Layout from '../components/layout';
import chef from '../images/chef_fumoir.svg';
import carte from '../images/carte.pdf';
// import MenuWithCard from '../components/Menu/MenuWithCard';
const MenuWithCard = React.lazy(() =>
  import('../components/Menu/MenuWithCard')
);

const Restaurant = () => {
  const handleClick = (event) => {
    event.preventDefault();
    document
      .getElementById('menu')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Layout>
      <RestaurantContainer>
        <ContentContainer>
          <RestaurantImage
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 2, delay: 0.3 }}
            src={chef}
            alt='ham fumoir'
          />

          <RestaurantContent>
            <RestaurantTitle
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 1, delay: 0.3 }}
            >
              Le Balthazar
            </RestaurantTitle>
            <RestaurantText
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 1, delay: 0.4 }}
            >
              <span>
                Nous vous proposons toute la journée des boissons et une gamme
                de produits de la mer et de la terre fait Maison :
              </span>
              <ul>
                <li>Saumon fumé</li>
                <li>Truite de mer au curry vert</li>
                <li>Bulots mayonnaise</li>
                <li>Crevettes marinées aux épices Mapuche</li>
                <li>Assiette de cochonaille</li>
              </ul>
              <p>
                Et pour terminer votre repas: une mousse chocolat à la fève
                tonka sans sucre, un généreux far breton ou le dessert du moment
              </p>
              <p>
                En accompagnement de vos plats, en plus de cidre et de bières
                bretonne, vous trouverez une sélection de vin de nos régions
                servie au verre ou à la carafe.
              </p>
              <ButtonMenu href='#menu' onClick={handleClick}>
                Voir le menu
              </ButtonMenu>
            </RestaurantText>
          </RestaurantContent>
        </ContentContainer>
      </RestaurantContainer>

      <Suspense fallback={<LazyComponent>Loading...</LazyComponent>}>
        <MenuContainer>
          <ButtonMenu href={carte} download id='menu'>
            Télécharger le menu
          </ButtonMenu>
          <MenuWithCard />
        </MenuContainer>
      </Suspense>
    </Layout>
  );
};

const RestaurantContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90vh;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 0;
  }
`;

const RestaurantContent = styled.div`
  padding-left: 3rem;
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem 3rem;
    font-size: 3rem;
  }
`;

const RestaurantTitle = styled(motion.h3)`
  padding-bottom: 2rem;
  font-size: 2rem;
  z-index: 100;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RestaurantText = styled(motion.div)`
  font-size: 1rem;
  > p {
    margin: 2rem 0;
  }

  > a {
    padding: 1rem 2rem;
    background: var(--clr-secondary);
    color: var(--clr-white);
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--clr-primary);
    }

    @media screen and (max-width: 768px) {
      padding: 0.5rem 1rem;
    }
  }

  > ul {
    padding: 1rem 0;
    list-style: inside;

    @media screen and (max-width: 768px) {
      list-style: none;
    }
  }

  > ul > li {
    padding-left: 1rem;
    font-size: 0.9rem;

    @media screen and (max-width: 768px) {
      padding-left: 0;
      padding-bottom: 0.5rem;
    }
  }
`;

const ButtonMenu = styled.a`
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: var(--clr-secondary);
  color: var(--clr-white);
  transition: background 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background: var(--clr-primary);
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const RestaurantImage = styled(motion.img)`
  width: 30vw;
  height: auto;
`;

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  gap: 2rem;
  margin: 5rem 0;
  font-size: 0.9em;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    font-size: 1em;
  }
`;

const LazyComponent = styled.div`
  height: 100vh;
`;

export default Restaurant;
