import { SET_USER_NAME, SET_USER_AVATAR, SET_USER_AUTHORIZING, SET_USER_AUTHORIZED, USER_NO_EXIST, USER_LOGIN_FAILED } from '../actions/actionTypes';

const userInitialState = {
    name: null,
    avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
    authorizing: false,
    authorized: false,
    error: null
};

export const user = (state = userInitialState, action) => {
    switch (action.type) {
        case SET_USER_NAME: 
            return { ...state, name: action.name};
        case SET_USER_AVATAR: 
            return { ...state, avatar: action.avatar};
        case SET_USER_AUTHORIZING:
            return { ...state, authorizing: true };
        case SET_USER_AUTHORIZED:
            return { ...state, authorizing: false, authorized: true };
        case USER_NO_EXIST:
            return Object.assign({}, state, {
                authorizing: false,
                authorized: false
            });
        case USER_LOGIN_FAILED:
            return {...state, authorizing: false, authorized: false };
        default:
            return state;
    }
};

export default user;