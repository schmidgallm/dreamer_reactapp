import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROMPTS, PROMPT_ERROR } from './types';

// Get all prompts
export const getPrompts = () => async dispatch => {
    try {
        const req = await axios.get('http://localhost:5000/api/v1/prompts');
        dispatch({
            type: GET_PROMPTS,
            payload: req.data,
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: PROMPT_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
        setAlert(err.response.statusText, 'danger');
    }
};
