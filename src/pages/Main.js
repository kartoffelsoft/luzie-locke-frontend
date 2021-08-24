import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '../helpers/PrivateRoute';
import Header from '../components/Header';
import Footer from '../components/Footer';

import {
  Home,
  Location,
  MyGarage,
  ItemShowRecent,
  ItemLocal,
  ItemCreate,
  ItemDetail,
  Chat,
  Inbox,
} from '.';

import styles from './Main.module.scss';

function Main() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Switch>
          <PrivateRoute path="/settings" component={Location} />
          <Route path="/items/search/:keyword" component={Home} />
          <PrivateRoute
            path="/items/garage"
            locationRequired
            component={MyGarage}
          />
          <PrivateRoute
            path="/items/local"
            locationRequired
            component={ItemLocal}
          />
          <PrivateRoute
            path="/items/create"
            locationRequired
            component={ItemCreate}
          />
          <PrivateRoute
            path="/items/:pid"
            locationRequired
            component={ItemDetail}
          />
          <PrivateRoute path="/chat/:nid" component={Chat} />
          <PrivateRoute path="/chat" component={Inbox} />
          <Route path="/items" component={ItemShowRecent} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Main;
