import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './helpers/ScrollToTop';
import { Main, Login } from './pages';
import { SocketProvider } from './contexts/SocketProvider';
import { ChatProvider } from './contexts/ChatProvider';
import { ping } from './actions/misc';
import styles from './App.module.scss';

function App() {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  useEffect(() => {
    if (authenticated) {
      setUid(JSON.parse(localStorage.getItem('profile'))._id);
    } else {
      setUid(null);
    }
  }, [authenticated]);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <SocketProvider uid={uid}>
          <ChatProvider path="/chat">
            <ScrollToTop>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Main} />
              </Switch>
            </ScrollToTop>
          </ChatProvider>
        </SocketProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
