import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import shop from '../images/fumoir.jpg';
import chef from '../images/ext.jpg';

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

const HeroTitle = styled(motion.h3)`
  padding-bottom: 2rem;
  font-size: 2rem;
`;

const HeroContent = styled(motion.p)`
  font-size: 1rem;
`;

const HeroImage = styled(motion.img)`
  width: 25rem;
  height: auto;
  z-index: 2;
  border-radius: 1rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroFumoirContainer>
        <HeroTextFumoir>
          <HeroTitle
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            Le Fumoir
          </HeroTitle>

          <HeroContent
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 0.4 }}
          >
            Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
            scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
          </HeroContent>
        </HeroTextFumoir>

        <HeroImage
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2, delay: 0.3 }}
          src={shop}
          alt='ham fumoir'
        />
      </HeroFumoirContainer>

      <HeroRestaurantContainer>
        <HeroImage
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2, delay: 1.3 }}
          src={chef}
          alt='ham fumoir'
        />

        <HeroTextRestaurant>
          <HeroTitle
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1.3 }}
          >
            Le Restaurant
          </HeroTitle>

          <HeroContent
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1.4 }}
          >
            Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
            scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
          </HeroContent>
        </HeroTextRestaurant>
      </HeroRestaurantContainer>
    </HeroContainer>
  );
};

export default Hero;
