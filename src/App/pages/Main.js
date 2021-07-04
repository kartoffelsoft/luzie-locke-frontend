import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../helpers/PrivateRoute';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Home, Location, ItemMy, ItemAll, ItemLocal, ItemCreate, ItemDetail } from '.';

import styles from './Main.module.scss';

function Main() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Switch>
          <PrivateRoute path='/settings' component={Location} />
          <Route path='/items/search/:keyword' component={Home} />
          <PrivateRoute path='/items/my' locationRequired component={ItemMy} />
          <PrivateRoute path='/items/local' locationRequired component={ItemLocal} />
          <PrivateRoute path='/items/create' locationRequired component={ItemCreate} />
          <PrivateRoute path='/items/:id' locationRequired component={ItemDetail} />
          <Route path='/items' component={ItemAll} />
          <Route path='/' component={ItemAll} />
        </Switch>      
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Main;
