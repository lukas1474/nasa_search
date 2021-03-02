import React from 'react';
import styles from '../MainView/MainView.module.scss';

import Search from '../Search/Search';

function MainView () {
  return(
    <div className={styles.root}>
      <Search />
    </div>
  );
}
export default MainView ;
