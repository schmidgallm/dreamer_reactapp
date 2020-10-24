import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PROMPTS,
    PROMPT_ERROR,
    UPDATE_LIKES,
    DELETE_PROMPT,
} from './types';

// Get all prompts
export const getPrompts = () => async dispatch => {
    try {
        const req = await axios.get('http://localhost:5000/api/v1/prompts');
        dispatch({
            type: GET_PROMPTS,
            payload: req.data,
        });
    } catch (err) {
        dispatch({
            type: PROMPT_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.statusText, 'danger'));
    }
};

// like a prompt
export const addLike = id => async dispatch => {
    try {
        const req = await axios.put(
            `http://localhost:5000/api/v1/prompts/like/${id}`
        );

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: req.data },
        });
    } catch (err) {
        dispatch({
            type: PROMPT_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.data.msg, 'danger'));
    }
};

// Remove a prompt like
export const removeLike = id => async dispatch => {
    try {
        const req = await axios.put(
            `http://localhost:5000/api/v1/prompts/unlike/${id}`
        );

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: req.data },
        });
    } catch (err) {
        dispatch({
            type: PROMPT_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.data.msg, 'danger'));
    }
};

// Delete a prompt -- only can delete users own prompt
export const deletePrompt = id => async dispatch => {
    try {
        const req = await axios.delete(
            `http://localhost:5000/api/v1/prompts/${id}`
        );

        dispatch({
            type: DELETE_PROMPT,
            payload: { id },
        });

        dispatch(setAlert('Post Deleted', 'success'));
    } catch (err) {
        dispatch({
            type: PROMPT_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
    }
};
