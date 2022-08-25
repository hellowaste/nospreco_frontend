import React from 'react';
import {StatusBar} from 'react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './src/state/features/user';
import AppNavigation from './src/navigations/AppNavigation';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#ffffff'} barStyle="dark-content" />
      <AppNavigation />
    </Provider>
  );
}
