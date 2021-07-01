import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../helpers/PrivateRoute';
import Header from '../../components/Header';
import { Home, Location, ItemMy, ItemAll, ItemCreate, ItemDetail } from '.';

function Main() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <PrivateRoute path='/settings' component={Location} />
          <Route path='/items/search/:keyword' component={Home} />
          <PrivateRoute path='/items/my' locationRequired component={ItemMy} />
          <PrivateRoute path='/items/create' locationRequired component={ItemCreate} />
          <PrivateRoute path='/items/:id' locationRequired component={ItemDetail} />
          <Route path='/items' locationRequired component={ItemAll} />
          <Route path='/' component={Home} />
        </Switch>      
      </main>
    </>
  );
}

export default Main;
