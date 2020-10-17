import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/v1/profiles/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Create or Update profile
export const createProfile = (
    formData,
    history,
    edit = false
) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        // post formData to api end point
        const res = await axios.post(
            'http://localhost:5000/api/v1/profiles',
            formData,
            config
        );

        // dispatch action
        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });

        // dispatch alert action
        dispatch(
            setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')
        );

        // if profile is being created and not updated
        if (!edit) {
            history.push('/dashboard');
        }
    } catch (err) {
        // check if errors
        const errors = err.response.data.errors;

        // if errors exist loop through each one and dipatch alert action to display them to user
        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }

        // dispatch error on error
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
