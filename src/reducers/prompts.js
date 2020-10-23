import { GET_PROMPTS, PROMPT_ERROR } from '../actions/types';

// init initial state
const initialState = {
    prompts: [],
    prompt: null,
    loading: true,
    error: {},
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PROMPTS:
            return {
                ...state,
                prompts: payload,
                loading: false,
            };
        case PROMPT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
