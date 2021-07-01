import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { loginGoogle } from '../../actions/auth';
import styles from './Login.module.scss';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onGoogleSuccess = async (res) => {
    const token = res?.accessToken;
    try {
      dispatch(loginGoogle( token, history));
    } catch (error) {
      console.log(error);
    }
  }

  const onGoogleFailure = (error) => {
    console.log(error);
  }

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
