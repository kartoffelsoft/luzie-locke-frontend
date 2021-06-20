import ItemBoard from '../../items/pages/ItemBoard';
import SearchBar from '../../shared/components/SearchBar';

import styles from './Home.module.scss';

function Home() {
  return (
    <>
      <SearchBar />
      <ItemBoard />
    </>
  );
}

export default Home;
