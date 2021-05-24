import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import shop from '../images/shop_fumoir.svg';
import chef from '../images/chef_fumoir.svg';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90vh;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const HeroFumoirContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 2rem 0;
  }
`;

const HeroRestaurantContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 0;
  }
`;

const HeroTextFumoir = styled.div`
  padding-right: 3rem;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem 9rem;
    font-size: 3rem;
  }
`;

const HeroTextRestaurant = styled.div`
  padding-left: 3rem;
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem 9rem;
    font-size: 3rem;
  }
`;

const HeroTitle = styled.h3`
  padding-bottom: 2rem;
  font-size: 2rem;
`;

const HeroContent = styled.p`
  font-size: 1rem;
`;

const HeroImage = styled.img`
  width: 25rem;
  height: auto;
  z-index: 2;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroFumoirContainer>
        <HeroTextFumoir>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <HeroTitle>Le Fumoir</HeroTitle>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 0.4 }}
          >
            <HeroContent>
              Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
              scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
            </HeroContent>
          </motion.div>
        </HeroTextFumoir>

        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2, delay: 0.3 }}
        >
          <HeroImage src={shop} alt='ham fumoir' />
        </motion.div>
      </HeroFumoirContainer>

      <HeroRestaurantContainer>
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2, delay: 1.3 }}
        >
          <HeroImage src={chef} alt='ham fumoir' />
        </motion.div>
        <HeroTextRestaurant>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1.3 }}
          >
            <HeroTitle>Le Restaurant</HeroTitle>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1.4 }}
          >
            <HeroContent>
              Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
              scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
            </HeroContent>
          </motion.div>
        </HeroTextRestaurant>
      </HeroRestaurantContainer>
    </HeroContainer>
  );
};

export default Hero;
