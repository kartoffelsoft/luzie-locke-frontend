import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { loginGoogle } from '../../store/actions/auth';
import styles from './Login.module.scss';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onGoogleSuccess = async (res) => {
    console.log(res);
    const token = res?.accessToken;
    try {
      dispatch(loginGoogle({ token }, history));
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
        clientId="589697532425-eq79qfiv9dutg58leviodjquvulusti9.apps.googleusercontent.com"
        onSuccess={onGoogleSuccess}
        onFailure={onGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Login;
