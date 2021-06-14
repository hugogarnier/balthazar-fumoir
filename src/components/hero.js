import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

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
    padding: 2rem 1rem;
    font-size: 3rem;
  }
`;

const HeroTextRestaurant = styled.div`
  padding-left: 3rem;
  /* text-align: right; */
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem 1rem;
    font-size: 3rem;
  }
`;

const HeroTitle = styled(motion.h3)`
  padding-bottom: 1rem;
  font-size: 2rem;
`;

const HeroContent = styled(motion.div)`
  font-size: 1rem;

  > span {
    font-size: 0.9rem;
  }

  > p {
    padding-top: 1rem;
  }

  > ul {
    padding: 0.5rem;
    list-style: inside;

    @media screen and (max-width: 768px) {
      list-style: none;
    }
  }

  > ul > li {
    padding-left: 1rem;
    font-size: 0.9rem;

    @media screen and (max-width: 768px) {
      padding-bottom: 0.5rem;
    }
  }
`;

const HeroImage = styled(motion.div)`
  max-width: 30rem;
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
            Epicerie fine
          </HeroTitle>

          <HeroContent
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 0.4 }}
          >
            <span>Ouverte du mardi au samedi de 10h00 à 18h00</span>
            <p>
              Nous vous proposons un large choix de produits de la terre et de
              la mer fumés maison au bois de hêtre :
            </p>
            <ul>
              <li>Saumon fumé</li>
              <li>Pavé de truite de mer aux algues</li>
              <li>Filet de porc fumé et séché</li>
              {/* <li>Magret de canard fumé</li> */}
              <li>Une gamme de bocaux maison</li>
              <li>Des terrines de la mer ou de la terre</li>
              <li>Un choix de caramel au beurre salé réalisé sur place</li>
            </ul>
            <span>A noter que des boissons sont proposés avec consigne.</span>
          </HeroContent>
        </HeroTextFumoir>

        <HeroImage
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2, delay: 0.3 }}
        >
          <StaticImage
            src={'../images/fum.jpg'}
            alt='ham fumoir'
            placeholder='blurred'
            className='heroImage'
          />
        </HeroImage>
      </HeroFumoirContainer>

      <HeroRestaurantContainer>
        <HeroImage
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2, delay: 1.3 }}
        >
          <StaticImage
            src={'../images/exter.jpg'}
            alt='restaurant exterior'
            placeholder='blurred'
            className='heroImage'
          />
        </HeroImage>

        <HeroTextRestaurant>
          <HeroTitle
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1.3 }}
          >
            Le Restaurant
          </HeroTitle>

          <HeroContent
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 1.4 }}
          >
            <span>Le service est ouvert en continu</span>
            <p>
              Au restaurant, vous trouverez une gamme de produits de la mer et
              de la terre fait Maison :
            </p>
            <ul>
              <li>Saumon fumé</li>
              <li>Truite de mer au curry vert</li>
              <li>Bulots mayonnaise</li>
              <li>Crevettes marinées aux épices Mapuche</li>
              <li>Assiette de cochonaille</li>
            </ul>
            <span>
              Egalement pour déguster vos plats, une sélection de vin de nos
              régions servie au verre ou à la carafe
            </span>
          </HeroContent>
        </HeroTextRestaurant>
      </HeroRestaurantContainer>
    </HeroContainer>
  );
};

export default Hero;
