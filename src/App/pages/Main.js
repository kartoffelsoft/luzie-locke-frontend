import { Route, Switch } from 'react-router-dom'

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
          <Route path='/' exact component={Home} />
          <Route path='/settings' component={Location} />
          <Route path='/garage' exact component={Garage} />
          <Route path='/garage/new' exact component={New} />
        </Switch>      
      </main>
    </>
  );
}

export default Main;
