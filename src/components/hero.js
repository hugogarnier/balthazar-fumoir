import React from 'react';

import '../styles/hero.css';
import hamburger from '../images/ham_fumoir.svg';

const Hero = () => {
  return (
    <section className='hero_container'>
      <div className='hero_text'>
        <h3>Le Fumoir</h3>
        <p>
          Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
          scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
        </p>
      </div>
      <div className='hero_image'>
        <img src={hamburger} alt='ham fumoir' />
      </div>
    </section>
  );
};

export default Hero;
