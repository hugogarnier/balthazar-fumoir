import React from 'react';
import { useSpring, animated } from 'react-spring';

import './hero.css';
import hamburger from '../images/ham_fumoir.svg';

const Hero = () => {
  const props = useSpring({
    to: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
    from: {
      opacity: 0,
      transform: 'translateX(-100px)',
    },

    delay: 1000,
  });
  const propsi = useSpring({
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    from: {
      opacity: 0,
      transform: 'translateY(-100px)',
    },

    delay: 1000,
  });

  return (
    <section className='hero_container'>
      <div className='hero_text'>
        <animated.div style={props}>
          <h3>Le Fumoir</h3>
          <p>
            Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
            scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
          </p>
        </animated.div>
      </div>

      <div className='hero_image'>
        <animated.div style={propsi}>
          <img src={hamburger} alt='ham fumoir' />
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;
