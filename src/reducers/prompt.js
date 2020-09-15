import { GET_ALL_PROMPTS } from '../actions/types'

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
        default:
            return state
    }
}
