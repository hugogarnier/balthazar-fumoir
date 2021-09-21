import React from 'react';
import styled from 'styled-components';

const CardMenuTextPrice = ({ items, fallback }) => {
  if (!items || items.length === 0) {
    return fallback;
  } else {
    return items.map((item) => {
      return (
        <>
          <CardContent key={item.id}>
            <ContentTitle>{item.title}</ContentTitle>
            <ContentPrice>{item.price}</ContentPrice>
          </CardContent>
        </>
      );
    });
  }
};

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const ContentTitle = styled.span`
  font-size: 0.95em;
`;

const ContentPrice = styled.span`
  font-size: 0.9em;
`;

export default CardMenuTextPrice;
