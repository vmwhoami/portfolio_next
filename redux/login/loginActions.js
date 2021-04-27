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
    const response = await axios({ method: 'POST', url, data: credentials, config, })
    const { status, data } = response
    if (status === 422) throw new Error(response);
    if (status === 200) {

      await localStorage.setItem('vitaliemelnic', data.token);
      return dispatch(loginSuccess("Logged in successfull"));
    }

  } catch (error) {
    console.log(error);
    dispatch(loginFailure("You have provided a wrong email or password"))
  }

};

const autoLogin = () => async (dispatch) => {
  const url = 'https://mother-child-api.herokuapp.com/api/v1/auto_login';
  const token = await localStorage.getItem('token');

  if (token) {
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      dispatch(loginSuccess(response.data));
    });
  }
};

const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logoutUSer());
};

export {
  login, loginSuccess, loginFailure, autoLogin, logout,
};