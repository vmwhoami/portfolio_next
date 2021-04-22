import axios from 'axios';
import { GET_ALL_ITEMS, GET_ALL_FAILURE } from './portfolioTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const getItemsSuccess = (data) => ({
  type: GET_ALL_ITEMS,
  payload: data,
});
const registerFailure = (data) => ({
  type: REGISTER_FAILURE,
  payload: data,
});

const getPortfolios = () => async (dispatch) => {
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/portfolios';
  axios(url).then((response) => dispatch(getItemsSuccess(response.data)))
    .catch((err) => {
      if (err.response.status === 406) {
        dispatch(registerFailure(err.response.data.errors));
      }
    });
};

export {
  getPortfolios
};
