import { useState } from 'react';

import icons from '../../assets/images/sprite.svg';
import styles from './BasicSearchBar.module.scss';

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState('');

  const onInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (keyword !== '') {
      props.onSubmit(keyword);
      setKeyword('');
    }
  };

  return (
    <form
      className={`${styles.container} ${props.className}`}
      onSubmit={onSubmit}
    >
      <input type="text" className={styles.input} placeholder="" />
      <button className={styles.button} onChange={onInputChange}>
        <svg className={styles.icon}>
          <use href={icons + '#icon-magnifying-glass'}></use>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
