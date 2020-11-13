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
    DELETE_STORY,
    ADD_COMMENT_STORY,
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

// Like a story
export const addLike = id => async dispatch => {
    try {
        const req = await axios.put(
            `http://localhost:5000/api/v1/stories/like/${id}`
        );

        dispatch({
            type: UPDATE_LIKES_STORY,
            payload: { id, likes: req.data },
        });
    } catch (err) {
        console.log(err.response);
        dispatch({
            type: STORY_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.data.msg, 'danger'));
    }
};

// like a story from story by id page
export const addOneLike = id => async dispatch => {
    try {
        const req = await axios.put(
            `http://localhost:5000/api/v1/stories/like/${id}`
        );

        dispatch({
            type: UPDATE_ONE_LIKES_STORY,
            payload: { id, likes: req.data },
        });
    } catch (err) {
        console.log(err.response);
        dispatch({
            type: STORY_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.data.msg, 'danger'));
    }
};

// Remove a story like
export const removeLike = id => async dispatch => {
    try {
        const req = await axios.put(
            `http://localhost:5000/api/v1/stories/unlike/${id}`
        );

        dispatch({
            type: UPDATE_LIKES_STORY,
            payload: { id, likes: req.data },
        });
    } catch (err) {
        dispatch({
            type: STORY_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.data.msg, 'danger'));
    }
};

// Remove a story like from story by id page
export const removeOneLike = id => async dispatch => {
    try {
        const req = await axios.put(
            `http://localhost:5000/api/v1/stories/unlike/${id}`
        );

        dispatch({
            type: UPDATE_ONE_LIKES_STORY,
            payload: { id, likes: req.data },
        });
    } catch (err) {
        dispatch({
            type: STORY_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.data.msg, 'danger'));
    }
};

// Delete a story -- only can delete users own stories
export const deletePrompt = id => async dispatch => {
    try {
        await axios.delete(`http://localhost:5000/api/v1/stories/${id}`);

        dispatch({
            type: DELETE_STORY,
            payload: { id },
        });

        dispatch(setAlert('Story Deleted', 'success'));
    } catch (err) {
        dispatch({
            type: STORY_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
    }
};

// Add a comment to story
export const addComment = (id, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const req = await axios.post(
            `http://localhost:5000/api/v1/stories/comment/${id}`,
            formData,
            config
        );

        dispatch({
            type: ADD_COMMENT_STORY,
            payload: req.data,
        });

        dispatch(setAlert('Comment Added', 'success'));
    } catch (err) {
        dispatch({
            type: STORY_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
    }
};

// Delete a comment from story
export const removeComment = (storyId, commentId) => async dispatch => {
    try {
        const req = await axios.delete(
            `http://localhost:5000/api/v1/stories/comment/${storyId}/${commentId}`
        );
        dispatch({
            type: REMOVE_COMMENT_STORY,
            payload: req.data,
        });

        dispatch(setAlert('Comment Removed', 'success'));
    } catch (err) {
        dispatch({
            type: STORY_ERROR,
            payload: {
                msg: err.response.data.msg,
                status: err.response.status,
            },
        });
        dispatch(setAlert(err.response.data.msg, 'danger'));
    }
};
