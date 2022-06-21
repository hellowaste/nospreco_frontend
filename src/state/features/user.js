import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  _id: '',
  email: '',
  token: '',
  name: '',
  surname: '',
  user_role: '',
  user_phone_nr: '',
  user_address: '',
  user_photo: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      AsyncStorage.setItem('user', JSON.stringify(action.payload));
      return {...action.payload};
    },
    logout: state => {
      AsyncStorage.removeItem('user');
      return {...initialState};
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
