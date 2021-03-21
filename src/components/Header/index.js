import React from 'react';
import logo from '../../assets/logo.png';

import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="grid">
        <div className="col-6">
          <figure>
            <img src={logo} alt="CALUDOB" style={{ width: "100%" }} />
          </figure>
        </div>
        <div className="col-6">Space for the menu</div>
      </div>
    </header>
  )
}

export default Header;