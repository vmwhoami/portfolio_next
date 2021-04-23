import { GET_ALL_ITEMS, GET_ALL_FAILURE } from './portfolioTypes';

const initial = { items: [], errors: [] };
const portfolioReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case GET_ALL_FAILURE:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default portfolioReducer;