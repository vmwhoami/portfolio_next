import { SUBMITTED } from './commontTypes';

const initial = {
  submitted: false,
};

const commonReducer = (state = initial, action) => {
  switch (action.type) {
    case SUBMITTED:
      return {
        ...state, submitted: !state.submitted
      };
    default:
      return state;
  }
};
export default commonReducer;
