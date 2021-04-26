import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './loginTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});
const loginFailure = (data) => ({
  type: LOGIN_FAILURE,
  payload: data,
});

const login = (user) => async (dispatch) => {
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/users';
  try {
    const res = await axios({ method: 'POST', url, data: user, config })
    dispatch(loginSuccess(res.data))
  } catch (error) {

  }
};

export {
  login,
  loginSuccess,
  loginFailure,
};
