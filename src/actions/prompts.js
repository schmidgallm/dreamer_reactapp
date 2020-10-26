import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PROMPTS,
    GET_PROMPT,
    PROMPT_ERROR,
    UPDATE_LIKES,
    DELETE_PROMPT,
    ADD_PROMPT,
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

// Get prompt by id
export const getPrompt = id => async dispatch => {
    try {
        const req = await axios.get(
            `http://localhost:5000/api/v1/prompts/${id}`
        );
        dispatch({
            type: GET_PROMPT,
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
        await axios.delete(`http://localhost:5000/api/v1/prompts/${id}`);

        dispatch({
            type: DELETE_PROMPT,
            payload: { id },
        });

        dispatch(setAlert('Prompt Deleted', 'success'));
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

// Add a prompt
export const addPrompt = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const req = await axios.post(
            'http://localhost:5000/api/v1/prompts',
            formData,
            config
        );

        dispatch({
            type: ADD_PROMPT,
            payload: req.data,
        });

        dispatch(setAlert('Prompt Created', 'success'));
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
