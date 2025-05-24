// loginReducer.js

import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SET_ADMIN,
} from './loginTypes';

const initial = {
  loggedIn: false,
  admin: false,
  user: null,
  errorMsg: null,
  error: false,
};

const loginReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_ADMIN:
      return {
        ...state, admin: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state, error: false, loggedIn: true, user: action.payload, errorMsg: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state, errors: true, loggedIn: false, errorMsg: action.payload,
      };

    case LOGOUT:
      return initial;
    default:
      return state;
  }
};
export default loginReducer;
