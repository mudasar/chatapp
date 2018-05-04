import { START_FETCHING_MESSAGES, RECEIVED_MESSAGES, UPDATE_MESSAGE_HEIGHT } from '../actions/ActionTypes';
import { combineReducers } from 'redux';

import messages from './messages';

const initialState = {
    isFetching: false,
    lastFetched: null,
    height: 0
}

export const meta = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING_MESSAGES:
            return {...state, isFetching: true };
        case RECEIVED_MESSAGES: 
            return { ...state, isFetching: false, lastFetched: action.receivedAt };
        case UPDATE_MESSAGE_HEIGHT: 
            return { ...state, height: action.height };
        default:
            return state;
    }
};

const chatroom = combineReducers({
    messages,
    meta
});

export default chatroom;