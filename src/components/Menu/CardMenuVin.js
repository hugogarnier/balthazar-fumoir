import React from 'react';
import styled from 'styled-components';

const CardMenuVin = ({ items, fallback }) => {
  if (!items || items.length === 0) {
    return fallback;
  } else {
    return items.map((item, index) => {
      return (
        <>
          <CardContent key={index}>
            <CardVin>
              <span>{item.title}</span>
            </CardVin>
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
`;

const CardVin = styled.span`
  display: flex;
  flex-direction: column;
`;

export default CardMenuVin;
