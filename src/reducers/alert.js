import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// init initial state
const initialState = [];

// valuate the action type being sent
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      // initial state is immutable so we need to include any state that we already have
      // in this case we alredy have an empty array of initial state so we must include that with spread opererator
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
