import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
    },
    logout: (state) => {
      state.email = '';
    },
  },
});

export const { login, logout } = loginFormSlice.actions;
export default loginFormSlice.reducer;