import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// Register User Action
export const register = ({ name, email, password }) => async (dispatch) => {
  // init headers to api requdst
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // stringify body
  const body = JSON.stringify({ name, email, password });

  try {
    // post to endpoint passing in config headers and stringified body
    const res = await axios.post(
      'http://localhost:5000/api/v1/users',
      body,
      config
    );

    // dispatch sucess action with response as payload
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    // check if errors
    const errors = err.response.data.errors;

    // if errors exist loop through each one and dipatch alert action to display them to user
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }
    // if fail then dispatch register fail action
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
