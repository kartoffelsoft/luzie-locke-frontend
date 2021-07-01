import React from 'react';

import icons from '../../assets/images/sprite.svg';
import styles from './index.module.scss';

const SearchBar = props => {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.searchInput} placeholder="" />
      <button className={styles.searchButton}>
        <svg className={styles.searchIcon}>
          <use href={icons + "#icon-magnifying-glass"}></use>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
