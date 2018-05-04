import { ADD_MESSAGE, SEND_MESSAGE } from '../actions/actionTypes';

const messagesInitialState = {};

export const messages = (state = messagesInitialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if(state.map(m => m.id).includes(action.id)){
                return state;
            }else{
                return [ ...state, {  
                    id: action.id,
                    text: action.text,
                    time: action.time,
                    author: action.author 
                } ];
            }
        case SEND_MESSAGE:
            return [ ...state, {  
                id: action.id,
                text: action.text,
                time: action.time,
                author: action.author 
            } ];
        default:
            return state;
    }
};

export default messages;
