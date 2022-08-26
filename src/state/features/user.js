import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  _id: '6308a00ee0569863097b5ca8',
  email: 'admin@admin.com',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDhhMDBlZTA1Njk4NjMwOTdiNWNhOCIsImlhdCI6MTY2MTUwOTc0MCwiZXhwIjoxNjc3MDYxNzQwfQ.-V2quVw6c0LEwUnTf_hf8NH8Dq2gBaDsdFQUqtNzFx0',
  user_role: 'Customer',
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
