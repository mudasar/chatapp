
import { combineReducers } from 'redux';

import { user } from './user';
import { chatroom } from './chatroom';

export const rootReducer = combineReducers({
    chatroom, 
    user
});

export default rootReducer;