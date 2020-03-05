import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER
} from "./testConstants";

const initialState = {
  data: 4
};

const testReducer = (state = initialState, action) => {
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
};

export default testReducer;
