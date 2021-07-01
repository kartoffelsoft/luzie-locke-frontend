import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../helpers/PrivateRoute';
import Header from '../../components/Header';
import { Home, Location, Garage, New } from '.';

function Main() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <PrivateRoute path='/settings' component={Location} />
          <PrivateRoute path='/garage/new' locationRequired component={New} />
          <PrivateRoute path='/garage' locationRequired component={Garage} />
          <Route path='/' component={Home} />
        </Switch>      
      </main>
    </>
  );
}

export default Main;
