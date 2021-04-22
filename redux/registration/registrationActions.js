import axios from 'axios';
import { REGISTER_FAILURE, REGISTRATION_SUCCESS } from './registrationTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const registerSuccess = (data) => ({
  type: REGISTRATION_SUCCESS,
  payload: data,
});
const registerFailure = (data) => ({
  type: REGISTER_FAILURE,
  payload: data,
});

const register = (user) => async (dispatch) => {
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/users';

  axios({
    method: 'POST',
    url,
    data: user,
    config,
  }).then((response) => dispatch(registerSuccess(response.data)))
    .catch((err) => {
      if (err.response.status === 406) {
        dispatch(registerFailure(err.response.data.errors));
      }
    });
};

export {
  register,
  registerSuccess,
  registerFailure,
};
