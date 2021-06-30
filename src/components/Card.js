import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GatsbyImage } from 'gatsby-plugin-image';

const Card = ({ title, image, price, description }) => {
  return (
    <CardContainer whileHover={{ scale: 1.05 }}>
      <GatsbyImage image={image} alt={title} className='card-image' />
      <CardFrontContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>{price}</CardPrice>
      </CardFrontContent>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 16rem;
  background: var(--clr-white);
  border-radius: 1.563rem;
  color: var(--clr-primary);
`;

const CardFrontContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardDescription = styled.span`
  font-size: 1rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CardPrice = styled.span`
  font-size: 1.5rem;
`;

export default Card;
