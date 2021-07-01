import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import ScrollToTop from '../components/ScrollToTop';
import { Main, Login } from './pages';
import { ping } from '../actions/misc';
import styles from './index.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={Main} />
          </Switch>    
        </ScrollToTop>  
      </BrowserRouter>
    </div>
  );
}

export default App;
