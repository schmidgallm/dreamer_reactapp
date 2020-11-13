// Action Types
import {
    ADD_STORY,
    GET_STORIES,
    GET_STORY,
    STORY_ERROR,
} from '../actions/types';

// init initial state
const initialState = {
    stories: [],
    story: {},
    loading: true,
    error: {},
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_STORIES:
            return {
                ...state,
                stories: payload,
                loading: false,
            };
        case GET_STORY:
            return {
                ...state,
                story: payload,
                loading: false,
            };
        case ADD_STORY:
            return {
                ...state,
                stories: [...state.stories, payload],
                loading: false,
            };
        case STORY_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
