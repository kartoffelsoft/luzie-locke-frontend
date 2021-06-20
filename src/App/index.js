import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { Main, Login } from './pages';
import { ping } from '../store/actions/misc';
import styles from './index.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Switch>
           <Route path='/login' component={Login} />
           <Route path='/' component={Main} />
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
