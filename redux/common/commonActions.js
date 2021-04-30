import axios from 'axios';
import { SUBMITTED } from './commontTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const changeSubmitted = () => ({
  type: SUBMITTED,
});

const submitData = (data) => async (dispatch) => {
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/contacts';
  try {
    const response = await axios({
      method: 'POST',
      url,
      data,
      config,
    });

    if (response) {
      console.log(response);
      dispatch(changeSubmitted());
    }
  } catch (error) {
    dispatch(registerFailure(error));
  }
};

export { changeSubmitted, submitData };
