import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'redux';
import { createStore, applyMiddleware } from 'react-redux';
import { thunk } from 'redux-thunk';

import { Login } from './components/Login';
import { rootReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
