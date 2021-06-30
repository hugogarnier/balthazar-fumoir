import React from 'react';
import styled from 'styled-components';

const CardMenuTextDesc = ({ items, fallback }) => {
  if (!items || items.length === 0) {
    return fallback;
  } else {
    return items.map((item) => {
      return (
        <>
          <CardContent key={item.id}>
            <ContentTitle>{item.title}</ContentTitle>
            <ContentDesc>{item.description}</ContentDesc>
          </CardContent>
        </>
      );
    });
  }
};

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const ContentTitle = styled.span`
  font-size: 0.95em;
  font-weight: 600;
`;

const ContentDesc = styled.span`
  font-size: 0.9em;
  font-style: italic;
`;

export default CardMenuTextDesc;
