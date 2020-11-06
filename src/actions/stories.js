// Dependencies
import axios from 'axios';
import { setAlert } from './alert';
import { ADD_STORY, STORY_ERROR } from './types';

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
