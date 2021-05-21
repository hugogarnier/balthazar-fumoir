import React from 'react';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaTripadvisor } from '@react-icons/all-files/fa/FaTripadvisor';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer_info'>
        <div className='footer_contact'>
          <p>
            {/* 26 Rue des Huit Patriotes <br /> 22500, Paimpol <br /> France */}
            adresse etc
          </p>
          <span>
            0675849375
            <br /> email
          </span>
          {/* 02 96 20 08 85 */}
        </div>
        <div className='footer_logo'>
          <span>
            <FaTripadvisor />
          </span>
          <span>
            <FaFacebook />
          </span>
        </div>
      </div>
      <span className='footer_copyright'>Copyright - 2021 Le Balthazar</span>
    </footer>
  );
};

export default Footer;
