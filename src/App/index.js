import { useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { Default, Login, Location } from './pages';
import { ping } from '../store/actions/misc';
import styles from './index.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Default} />
          <Route path='/login' component={Login} />
          <Route path='/location' component={Location} />
        </Switch>      
      </HashRouter>
    </div>
  );
}

export default App;
