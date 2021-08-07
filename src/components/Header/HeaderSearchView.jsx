import { BasicSearchBar } from '../../components-common/search-bar';

import icons from '../../assets/images/sprite.svg';
import styles from './HeaderSearchView.module.scss';

const HeaderSearchView = (props) => {
  return (
    <>
      <div className={styles.container}>
        <svg className={styles.back} onClick={props.onCloseClick}>
          <use href={icons + '#icon-arrow-left2'}></use>
        </svg>
        <div className={styles.search}>
          <BasicSearchBar />
        </div>
      </div>
    </>
  );
};

export default HeaderSearchView;
