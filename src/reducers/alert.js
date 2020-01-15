import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// init initial state
const initialState = [];

// valuate the action type being sent
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
