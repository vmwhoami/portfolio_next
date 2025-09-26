// commonActions.js

import axios from 'axios';
import { SUBMITTED, ERROR } from './commontTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const changeSubmitted = () => ({ type: SUBMITTED });

const submissionError = () => ({ type: ERROR });

const submitData = (data) => async (dispatch) => {
  const url = 'mongodb://mongodb:27017/portfolio';
  try {
    await axios({
      method: 'POST', url, data, config,
    });
    dispatch(changeSubmitted());
  } catch (error) {
    dispatch(submissionError());
  }
};

export { changeSubmitted, submitData };
