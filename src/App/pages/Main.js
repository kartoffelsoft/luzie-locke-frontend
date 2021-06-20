import { Route, Switch } from 'react-router-dom'

import Header from '../../shared/components/Header';
import { Home, Location } from '.';

function Main() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/location' component={Location} />
        </Switch>      
      </main>
    </>
  );
}

export default Main;
