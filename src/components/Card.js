import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = ({ title, image, price, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    rotate: { rotateY: 0 },
    rotateNeg: { rotateY: -180 },
    rotatePos: { rotateY: 180 },
  };

  return (
    <CardContainer whileHover={{ scale: 1.05 }}>
      <CardInner onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <CardFront
          initial={{ rotateY: 0 }}
          animate={isOpen ? 'rotateNeg' : 'rotate'}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <img src={image} alt={image} />
          <CardFrontContent>
            <h3>{title}</h3>
            <span>{price}</span>
          </CardFrontContent>
        </CardFront>
        <CardBack
          initial={{ rotateY: 180 }}
          animate={isOpen ? 'rotate' : 'rotatePos'}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <p>{description}</p>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background-color: transparent;
  width: 25%;
  min-width: 13rem;
  min-height: 20rem;
  padding-bottom: 35%; /* Same as width, sets height */
  position: relative;
`;

const CardInner = styled(motion.div)`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const CardFront = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: var(--clr-white);
  width: 100%;
  height: 100%;
  border-radius: 1.563rem;
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  color: var(--clr-primary);

  > img {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 50%;
    border-top-left-radius: 1.563rem;
    border-top-right-radius: 1.563rem;
  }
`;

const CardFrontContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;

  > h3 {
    font-size: 1rem;
    padding-bottom: 2rem;
  }

  > span {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    > h3 {
      word-break: break-all;
    }
  }
`;

const CardBack = styled(motion.div)`
  background: var(--clr-white);
  width: 100%;
  height: 100%;
  border-radius: 1.563rem;
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  > p {
    padding: 2rem 2rem;
    font-size: 1.2rem;
  }
`;

export default Card;
