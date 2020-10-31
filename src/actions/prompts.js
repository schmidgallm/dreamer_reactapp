import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PROMPTS,
    GET_PROMPT,
    PROMPT_ERROR,
    UPDATE_LIKES,
    UPDATE_ONE_LIKE,
    DELETE_PROMPT,
    ADD_PROMPT,
    ADD_COMMENT,
    REMOVE_COMMENT,
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
                msg: err.response.data.msg,
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
                msg: err.response.data.msg,
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
        console.log(err.response);
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

// like a prompt
export const addOneLike = id => async dispatch => {
    try {
        const req = await axios.put(
            `http://localhost:5000/api/v1/prompts/like/${id}`
        );

        dispatch({
            type: UPDATE_ONE_LIKE,
            payload: { id, likes: req.data },
        });
    } catch (err) {
        console.log(err.response);
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

// Remove a prompt like
export const removeOneLike = id => async dispatch => {
    try {
        const req = await axios.put(
            `http://localhost:5000/api/v1/prompts/unlike/${id}`
        );

        dispatch({
            type: UPDATE_ONE_LIKE,
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

// Add a comment to prompt
export const addComment = (id, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const req = await axios.post(
            `http://localhost:5000/api/v1/prompts/comment/${id}`,
            formData,
            config
        );

        dispatch({
            type: ADD_COMMENT,
            payload: req.data,
        });

        dispatch(setAlert('Comment Added', 'success'));
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

// Delete a comment from prompt
export const removeComment = (promptId, commentId) => async dispatch => {
    try {
        const req = await axios.delete(
            `http://localhost:5000/api/v1/prompts/comment/${promptId}/${commentId}`
        );

        dispatch({
            type: REMOVE_COMMENT,
            payload: req.data,
        });

        dispatch(setAlert('Comment Removed', 'success'));
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
