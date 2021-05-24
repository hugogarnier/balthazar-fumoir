import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiUpArrowCircle } from '@react-icons/all-files/bi/BiUpArrowCircle';
import { IconContext } from '@react-icons/all-files';

const ScrollContainer = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ScrollContainer>
      <IconContext.Provider value={{ color: '#303030', size: '4rem' }}>
        {isVisible && <BiUpArrowCircle onClick={scrollToTop} />}
      </IconContext.Provider>
    </ScrollContainer>
  );
}
