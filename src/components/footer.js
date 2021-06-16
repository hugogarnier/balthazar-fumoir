import React from 'react';
import styled from 'styled-components';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaTripadvisor } from '@react-icons/all-files/fa/FaTripadvisor';

const FooterContainer = styled.footer`
  margin: 0 auto;
  padding: 1rem calc((100vw - 1300px) / 2);
  text-align: center;
  align-items: center;
  background: var(--clr-gray);
  font-size: 0.9rem;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterContact = styled.div`
  display: flex;
  text-align: start;
`;

const FooterContactContent = styled.div``;

const FooterContactSpan = styled.span`
  padding-left: 2rem;

  > a:hover {
    color: var(--clr-white);
  }
`;

const FooterLogo = styled.div`
  > a {
    padding: 0 0.5rem;
    font-size: 2rem;
  }

  > a:hover {
    color: var(--clr-white);
  }
`;

const FooterCopyright = styled.span`
  padding: 1rem;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <FooterContact>
          <FooterContactContent>
            26 Rue des Huit Patriotes <br /> 22500, Paimpol <br /> France
          </FooterContactContent>
          <FooterContactSpan>
            <a href='tel:+0296200885'>02 96 20 08 85</a>
            <br /> <a href='mailto:someone@example.com'>EMAIL</a>
          </FooterContactSpan>
        </FooterContact>
        <FooterLogo>
          <a
            href='https://www.tripadvisor.fr/Restaurant_Review-g488278-d2295578-Reviews-Le_Balthazar-Paimpol_Cotes_d_Armor_Brittany.html'
            target='_blank'
            rel='noreferrer'
          >
            <FaTripadvisor />
          </a>
          <a
            href='https://www.facebook.com/Le-Balthazar-102870556902980/'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebook />
          </a>
        </FooterLogo>
      </FooterInfo>
      <FooterCopyright>Copyright - 2021 Le Balthazar</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
