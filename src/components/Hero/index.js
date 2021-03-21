import React from 'react';
import heroImg from '../../assets/cachorro-tomando-una-ducha-2.jpg';

import styles from './styles.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <figure>
        <img src={heroImg} alt="cachorro tomando una ducha" />
        <div className="screen"></div>
      </figure>
    </div>
  )
}

export default Hero;
