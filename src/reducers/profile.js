import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    GET_ALL_PROFILES,
} from '../actions/types';

// init initial state
const initialState = {
    profile: null,
    prompts: [],
    stories: [],
    loading: true,
    error: {},
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false,
            };
        case GET_ALL_PROFILES:
            return {
                ...state,
                profile: payload,
                loading: false,
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                prompts: [],
                stories: [],
                loading: false,
            };
        default:
            return state;
    }
}
