import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userToken: null,
    userProfil: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.userToken = action.payload;
    },
    logoutUser: (state) => {
      state.userToken = null; 
      state.userProfil= null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;