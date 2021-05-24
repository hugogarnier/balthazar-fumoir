import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import hamburger from '../images/ham_fumoir.svg';

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const HeroText = styled.div`
  flex-shrink: 20;
  padding-right: 3rem;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 0 9rem;
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
  flex-grow: 1;
  width: 100%;
  max-width: 40rem;
  height: auto;
  z-index: -1;
`;

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroText>
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
        </HeroText>

        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2, delay: 0.3 }}
        >
          <HeroImage src={hamburger} alt='ham fumoir' />
        </motion.div>
      </HeroContainer>
    </>
  );
};

export default Hero;
