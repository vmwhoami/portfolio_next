import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './loginTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const loginSuccess = (message) => ({
  type: LOGIN_SUCCESS,
  payload: message,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const logoutUSer = () => ({
  type: LOGOUT,
});

const login = (credentials) => async (dispatch) => {
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/login';
  try {
    const response = await axios({
      method: 'POST', url, data: credentials, config,
    });
    const { status, data } = response;
    if (status !== 200) throw new Error();
    if (status === 200) {
      await localStorage.setItem('vitaliemelnic', data.token);
      return dispatch(loginSuccess('Successfull login'));
    }
  } catch (error) {
    dispatch(loginFailure('You have provided a wrong email or password'));
  }
};

const autoLogin = (url) => async (dispatch) => {
  const token = await localStorage.getItem('vitaliemelnic');
  if (token) {
    axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
  }
};
const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logoutUSer());
};

export {
  login, loginSuccess, loginFailure, autoLogin, logout,
};
