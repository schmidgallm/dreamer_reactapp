// Action Types
import { ADD_STORY, STORY_ERROR } from '../actions/types';

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
