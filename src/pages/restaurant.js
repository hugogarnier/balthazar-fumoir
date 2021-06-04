import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Layout from '../components/layout';
import chef from '../images/chef_fumoir.svg';
import carte from '../images/carte.webp';

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
              <p>
                Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
                scelerra risus, sagittis. Venenatis ridiculus Pella nulla. S
              </p>
              <ButtonMenuMax href='#menu' onClick={handleClick}>
                Voir le menu
              </ButtonMenuMax>
              <ButtonMenuMin href='#menu' onClick={handleClick}>
                Voir le menu
              </ButtonMenuMin>
            </RestaurantText>
          </RestaurantContent>
        </ContentContainer>
      </RestaurantContainer>

      <MenuContainer id='menu'>
        <Test src={carte} alt='menu restaurant' />
      </MenuContainer>
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
    padding: 2rem 9rem;
    font-size: 3rem;
  }
`;

const RestaurantTitle = styled(motion.h3)`
  padding-bottom: 2rem;
  font-size: 2rem;
  z-index: 100;
`;

const RestaurantText = styled(motion.div)`
  font-size: 1rem;

  > p {
    margin-bottom: 4rem;
  }

  > a {
    padding: 1rem 2rem;
    background: var(--clr-secondary);
    color: var(--clr-white);
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--clr-primary);
    }
  }

  @media screen and (max-width: 768px) {
    > a {
      padding: 0.5rem 1rem;
    }
  }
`;

const ButtonMenuMax = styled.a`
  padding: 1rem 2rem;
  background: var(--clr-secondary);
  color: var(--clr-white);
  transition: background 0.3s ease-in-out;

  &:hover {
    background: var(--clr-primary);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ButtonMenuMin = styled.a`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 0.5rem 1rem;
    background: var(--clr-secondary);
    color: var(--clr-white);
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--clr-primary);
    }
  }
`;

const RestaurantImage = styled(motion.img)`
  /* flex: 0 1 auto; */
  width: 35vw;
  height: auto;
`;

const MenuContainer = styled(motion.div)`
  height: 80vh;
`;

const Test = styled.img`
  height: auto;
  width: 100%;
`;

export default Restaurant;
