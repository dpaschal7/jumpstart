

import {ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR} from "./asyncConstants"

import { createReducer } from "../../app/common/util/reducerUtils";

const initalState = {
    loading: false,
    elementName: null
}

const asyncActionStarted = (state, payload) => {
    return {
        ...state,
        loading: true,
        elementName: payload
    }
}

const asyncActionFinished = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    }
}
const asyncActionError = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null
    }
}

export default createReducer(initalState, {
    [ASYNC_ACTION_START]: asyncActionStarted,
    [ASYNC_ACTION_ERROR]: asyncActionError,
    [ASYNC_ACTION_FINISH]: asyncActionFinished
})
