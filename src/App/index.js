import { HashRouter, Route, Switch } from 'react-router-dom'
import { Default, Login } from './pages';

import styles from './index.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Default} />
          <Route path='/login' component={Login} />
        </Switch>      
      </HashRouter>
    </div>
  );
}

export default App;
