import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './helpers/ScrollToTop';
import { Main, Login } from './pages';
import { AuthProvider } from './contexts/AuthProvider';
import { SocketProvider } from './contexts/SocketProvider';
import { ChatProvider } from './contexts/ChatProvider';
import { ping } from './actions/misc';
import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <AuthProvider>
          <SocketProvider>
            <ChatProvider path="/chat">
              <ScrollToTop>
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/" component={Main} />
                </Switch>
              </ScrollToTop>
            </ChatProvider>
          </SocketProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
