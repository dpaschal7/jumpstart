import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER
} from "./testConstants";
import { createReducer } from "../../app/common/util/reducerUtils";

const initialState = {
  data: 4
};
const incrementCounter = state => {
  return { ...state, data: state.data + 1 };
};

const decrementCounter = state => {
  return { ...state, data: state.data - 1 };
};

const resetCounter = state => {
  return { ...state, data: initialState.data };
};
/* const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + 1 };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 1 };
    case RESET_COUNTER:
      return { ...state, data: initialState.data };
    default:
      return state;
  }
}; */

export default createReducer(initialState, {
  [RESET_COUNTER]: resetCounter,
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});
