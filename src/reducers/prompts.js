import { GET_ALL_PROMPTS, PROMPT_ERROR } from '../actions/types'

// init initial state
const initialState = {
    prompts: [],
    loading: true,
    error: {},
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_ALL_PROMPTS:
            return {
                ...state,
                prompts: payload,
                loading: false,
            }
        case PROMPT_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}
