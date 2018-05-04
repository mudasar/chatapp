import { SET_USER_NAME, SET_USER_AVATAR, SET_USER_AUTHORIZING, SET_USER_AUTHORIZED  } from './actionTypes';

export const setUserName = (name) => ({ type: SET_USER_NAME, name });
export const setUserAvatar = (avatar) => 
    ({ 
        type: SET_USER_AVATAR,
        avatar: avatar && avatar.length > 0 ? avatar : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png' 
    });
    
export const setUserAuthorizing = () => ({ type: SET_USER_AUTHORIZING });
export const setUserAuthorized = () => ({ type: SET_USER_AUTHORIZED });

