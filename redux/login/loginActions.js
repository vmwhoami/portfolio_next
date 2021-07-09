import axios from 'axios';
import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SET_ADMIN,
} from './loginTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
const setAdmin = (bool) => ({
  type: SET_ADMIN,
  payload: bool,
});
const loginSuccess = (email) => ({
  type: LOGIN_SUCCESS,
  payload: email,
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
    const { data } = response;
    const { admin, email } = data.data;
    dispatch(setAdmin(admin));
    await localStorage.setItem('vitaliemelnic', JSON.stringify({ email, admin, token: data.token }));
    return dispatch(loginSuccess(email));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
  return null;
};

const autoLogin = (url) => async () => {
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
