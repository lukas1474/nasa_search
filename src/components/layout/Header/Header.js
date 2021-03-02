import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <h2 className={styles.title}>NASA Search</h2>
    <p className={styles.description}>Use search bar to write localization what you desire. Next you will see two cubes. Left one with NASA satellite photo and the second one with map from Leaflet</p>
  </header>
);

export default Header;
