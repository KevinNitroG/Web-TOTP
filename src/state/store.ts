import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@state/theme/themeSlice';
import userReducer from '@state/user/userSlice';

const store = configureStore({
  devTools: true,
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
