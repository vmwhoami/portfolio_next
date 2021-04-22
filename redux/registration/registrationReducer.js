import { REGISTER_FAILURE, REGISTRATION_SUCCESS } from './registrationTypes';

const initial = {
  user: null,
  errors: [],
  navbar: true,
  redirect: false,
};
const registrationReducer = (state = initial, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;
