import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER
} from "./testConstants";
import { asyncActionStart, asyncActionFinish } from "../async/asyncActions";

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER
  };
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const incrementAsync = () => {
  return async dispatch => {
    dispatch(asyncActionStart());
    await delay(1000);
    dispatch(incrementCounter());
    dispatch(asyncActionFinish());
  };
};

export const decrementAsync = () => {
  return async dispatch => {
    dispatch(asyncActionStart());
    await delay(1000);
    dispatch(decrementCounter());
    dispatch(asyncActionFinish());
  };
};
