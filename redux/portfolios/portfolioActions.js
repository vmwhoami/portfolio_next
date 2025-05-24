//portfolioAtions.js

import axios from 'axios';
import { GET_ALL_ITEMS, GET_ALL_FAILURE } from './portfolioTypes';

const getItemsSuccess = (data) => ({
  type: GET_ALL_ITEMS,
  payload: data,
});
const registerFailure = (data) => ({
  type: GET_ALL_FAILURE,
  payload: data,
});

const getPortfolios = () => async (dispatch) => {
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/portfolios';
  try {
    const response = await axios.get(url);

    if (response) {
      dispatch(getItemsSuccess(response.data));
    }
  } catch (error) {
    dispatch(registerFailure(error));
  }
};

export {
  getPortfolios, registerFailure,
};
