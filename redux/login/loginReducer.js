import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './loginTypes';

const initial = {
  loggedIn: false,
  message: null,
  errors: false,
};

const loginReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state, errors: false, loggedIn: true, message: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state, errors: true, loggedIn: false, message: action.payload,
      };

    case LOGOUT:
      return initial;
    default:
      return state;
  }
};
export default loginReducer;