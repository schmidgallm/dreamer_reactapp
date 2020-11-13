// Dependencies
import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_STORIES,
    GET_STORY,
    ADD_STORY,
    STORY_ERROR,
    UPDATE_LIKES_STORY,
    UPDATE_ONE_LIKES_STORY,
    ADD_COMMENT,
    REMOVE_COMMENT_STORY,
} from './types';

// Get all stories
export const getStories = () => async dispatch => {
    try {
        const req = await axios.get('http://localhost:5000/api/v1/stories');
        dispatch({
            type: GET_STORIES,
            payload: req.data,
        });
    } catch (err) {
        dispatch({
            type: STORY_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.statusText, 'danger'));
    }
};

// Get story by id
export const getStory = id => async dispatch => {
    try {
        const req = await axios.get(
            `http://localhost:5000/api/v1/stories/${id}`
        );
        dispatch({
            type: GET_STORY,
            payload: req.data,
        });
    } catch (err) {
        dispatch({
            type: STORY_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.statusText, 'danger'));
    }
};

// Add a story
export const addStory = formData => async dispatch => {
    // config on post
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
    };
    try {
        // post formdata
        const req = await axios.post(
            'http://localhost:5000/api/v1/stories',
            formData,
            config
        );

        // dispatch data
        dispatch({
            type: ADD_STORY,
            payload: req.data,
        });

        // set success alert
        dispatch(setAlert('Story Created', 'success'));
    } catch (err) {
        dispatch({
            type: STORY_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.statusText, 'danger'));
    }
};
