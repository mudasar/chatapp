import { SET_USER_NAME, SET_USER_AVATAR, SET_USER_AUTHORIZING, SET_USER_AUTHORIZED, USER_NO_EXIST, USER_LOGIN_FAILED } from './actionTypes';
import firebase from '../firebase';

import { fetchMessages } from './chatroom';

export const setUserName = (name) => ({ type: SET_USER_NAME, name });
export const setUserAvatar = (avatar) => 
    ({ 
        type: SET_USER_AVATAR,
        avatar: avatar && avatar.length > 0 ? avatar : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png' 
    });
    
export const startAuthorizing = () => ({ type: SET_USER_AUTHORIZING });
export const userAuthorized = () => ({ type: SET_USER_AUTHORIZED });
export const userLoginFailed = (error) => ({ type: USER_LOGIN_FAILED, error });

export const userNoExist = () => ({
    type: USER_NO_EXIST
});

export const login = ({email, password}) =>
    (dispatch, getState) => {
      dispatch(startAuthorizing());
      firebase.auth().signInWithEmailAndPassword(email, password).then(auth => {
          dispatch(userAuthorized());
          dispatch(fetchMessages());
      }).catch(
          e => {
              dispatch(userLoginFailed(e));
          }
      );
    };