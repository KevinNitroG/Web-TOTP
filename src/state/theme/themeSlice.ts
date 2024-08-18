import { Scheme, Theme } from '@/config/themes';
import {
  setAndGetTheme,
  switchTheme as switchThemeFunc,
} from '@features/themeManager';
import { createSlice } from '@reduxjs/toolkit';

export interface themeState {
  currentTheme: Theme;
  currentScheme: Scheme;
}

const [initTheme, initScheme] = setAndGetTheme();

const initialState: themeState = {
  currentTheme: <Theme>initTheme,
  currentScheme: <Scheme>initScheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      [state.currentTheme, state.currentScheme] = switchThemeFunc(
        state.currentTheme,
      );
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
