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
           <Route path='/' component={Main} />
           <Route path='/login' component={Login} />
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
