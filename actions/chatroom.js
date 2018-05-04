import { ADD_MESSAGE, SEND_MESSAGE, START_FETCHING_MESSAGES, UPDATE_MESSAGE_HEIGHT, RECEIVED_MESSAGES } from './actionTypes';
import firebase from '../firebase';

export const addMessage = (message) => 
    ({
        type: ADD_MESSAGE,
        ...message
    });

export const sendMessage = (text, user) => 
    (dispatch, getState) => {
        let msg = {
            text: text,
            time: Date.now(),
            autho: {
                name: user.name,
                avatar: user.avatar
            }
        };
        const newMsgRef = firebase.database()
                        .ref('messages')
                        .push();
        msg.id = newMsgRef.key;
        newMsgRef.set(msg);
        dispatch(addMessage(msg));

    };

export const startFetchingMessages = () => 
    ({
        type: START_FETCHING_MESSAGES
    });

export const receivedMessages = () =>
    ({
        type: RECEIVED_MESSAGES,
        receivedAt: Date.now()
    });

export const updateMessagesHeight = (event) => 
    ({
        type: UPDATE_MESSAGE_HEIGHT,
        height: event.nativeEvent.layout.height
    });

export const fetchMessages = () =>
    (dispatch, getState) => {
      firebase.database()
        .ref('messages')
        .on('value', (snapshot) => {
            setTimeout(() => {
                const messages = snapshot.val() || [];
                dispatch(receiveMessages(messages));
            }, 0);
        });
    };

    export const receiveMessages = (message) => 
        (dispatch, getState) => {
            Object.values(messages).forEach(msg => {
                dispatch(addMessage(msg));
            });
            dispatch(receivedMessages());
        };