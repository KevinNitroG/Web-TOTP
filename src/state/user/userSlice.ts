import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type userState = {
  avatar: string | File | null;
  isSignin: boolean;
  password: string | null;
  username: string | null;
};

const initialState: userState = {
  avatar: null,
  isSignin: false,
  password: null,
  username: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        avatar: string;
        username: string;
        password: string;
      }>,
    ) => {
      state.isSignin = true;
      state.avatar = action.payload.avatar;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.isSignin = false;
      state.avatar = null;
      state.username = null;
      state.password = null;
    },
    editProfile: (
      state,
      action: PayloadAction<{
        avatar: string | File | null;
        username: string;
        password: string;
      }>,
    ) => {
      state.avatar = action.payload.avatar;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { login, logout, editProfile } = userSlice.actions;

export default userSlice.reducer;
