import { GoogleLogin } from 'react-google-login';

import { useAuth } from '../contexts/AuthProvider';
import styles from './Login.module.scss';

function Login() {
  const { login } = useAuth();

  const onGoogleSuccess = async (res) => {
    const token = res?.accessToken;
    try {
      login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const onGoogleFailure = (error) => {
    console.log(error);
  };

  return (
    <div className={styles.container}>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={onGoogleSuccess}
        onFailure={onGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Login;
