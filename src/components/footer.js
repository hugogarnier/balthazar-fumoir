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
  padding: 1rem;
`;

const FooterContact = styled.div`
  display: flex;
  text-align: start;
`;

const FooterContactContent = styled.div``;

const FooterContactSpan = styled.span`
  padding-left: 2rem;
`;

const FooterLogo = styled.div``;

const FooterLogoSpan = styled.span`
  padding: 0 0.5rem;
  font-size: 2rem;
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
            {/* 26 Rue des Huit Patriotes <br /> 22500, Paimpol <br /> France */}
            adresse etc
          </FooterContactContent>
          <FooterContactSpan>
            0675849375
            <br /> email
          </FooterContactSpan>
          {/* 02 96 20 08 85 */}
        </FooterContact>
        <FooterLogo>
          <FooterLogoSpan>
            <FaTripadvisor />
          </FooterLogoSpan>
          <FooterLogoSpan>
            <FaFacebook />
          </FooterLogoSpan>
        </FooterLogo>
      </FooterInfo>
      <FooterCopyright>Copyright - 2021 Le Balthazar</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
