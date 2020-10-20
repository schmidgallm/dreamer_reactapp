import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    PROFILE_ERROR,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('http://localhost:5000/api/v1/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

// Register User Action
export const register = ({ name, email, password }) => async dispatch => {
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

        dispatch(loadUser());
    } catch (err) {
        // check if errors
        const errors = err.response.data.errors;

        // if errors exist loop through each one and dipatch alert action to display them to user
        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }
        // if fail then dispatch register fail action
        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

// Login User Action
export const login = (email, password) => async dispatch => {
    // init headers to api requdst
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // stringify body
    const body = JSON.stringify({ email, password });

    try {
        // post to endpoint passing in config headers and stringified body
        const res = await axios.post(
            'http://localhost:5000/api/v1/auth',
            body,
            config
        );

        // dispatch sucess action with response as payload
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        // check if errors
        const errors = err.response.data.errors;

        // if errors exist loop through each one and dipatch alert action to display them to user
        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }
        // if fail then dispatch register fail action
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

// Logout User && Clear Profile
export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
};

// Delete User
export const deleteAccount = () => async dispatch => {
    if (window.confirm('Plese confirm you wish to delete your account')) {
        try {
            await axios.delete('http://localhost:5000/api/v1/profiles');

            dispatch({ type: CLEAR_PROFILE });
            dispatch({ type: ACCOUNT_DELETED });

            dispatch(setAlert('Profile succesfully deleted', 'danger'));
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status,
                },
            });
        }
    }
};
