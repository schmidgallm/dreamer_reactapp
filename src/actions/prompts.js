import axios from 'axios'
import { setAlert } from './alert'
import { GET_ALL_PROMPTS, PROMPT_ERROR } from './types'

// Get all prompts
export const getAllPrompts = () => async (dispatch) => {
    try {
        console.log('hello')
        const req = await axios.get('http://localhost:5000/api/v1/prompts')
        dispatch({
            type: GET_ALL_PROMPTS,
            payload: req.data,
        })
    } catch (err) {
        dispatch({
            type: PROMPT_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        })
        setAlert(err.response.statusText, 'danger')
    }
}
