// commonReducer.js

import { SUBMITTED, ERROR } from './commontTypes';

const initial = {
  submitted: false,
  error: false,
};

const commonReducer = (state = initial, action) => {
  switch (action.type) {
    case SUBMITTED:
      return {
        ...state, submitted: true, error: false,
      };
    case ERROR:
      return {
        ...state, error: true,
      };
    default:
      return state;
  }
};
export default commonReducer;
