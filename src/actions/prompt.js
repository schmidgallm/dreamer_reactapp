import axios from 'axios'
import { setAlert } from './alert'
import { GET_ALL_PROMPTS } from './types'

// Get all prompts
export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/api/v1/prompts')
        dispatch({
            type: GET_ALL_PROMPTS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: 'XXXXX',
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        })
    }
}
