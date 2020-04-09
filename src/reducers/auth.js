import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

// init initial state
const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null
};

// determine action type called
export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		// if successful
		// set token to local storage
		// set authenticated to true
		// set loading to false
		case REGISTER_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false
			};
		// if fail
		// remove token if any from local storage
		// keep authenticated at false
		// set loading to false
		case REGISTER_FAIL:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false
			};
		default:
			return state;
	}
}
