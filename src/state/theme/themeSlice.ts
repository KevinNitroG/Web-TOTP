import type { Scheme, Theme } from '@/types/theme';
import {
  setAndGetTheme,
  switchTheme as switchThemeFunc,
} from '@features/theme/themeManager';
import { createSlice } from '@reduxjs/toolkit';

export type themeState = {
  currentTheme: Theme;
  currentScheme: Scheme;
};

const { theme: initTheme, scheme: initScheme } = setAndGetTheme();

const initialState: themeState = {
  currentTheme: <Theme>initTheme,
  currentScheme: <Scheme>initScheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      const { theme, scheme } = switchThemeFunc(state.currentTheme);
      state.currentTheme = theme;
      state.currentScheme = scheme;
    },
    setTheme: (state) => {
      const { theme, scheme } = setAndGetTheme();
      state.currentTheme = theme;
      state.currentScheme = scheme;
    },
  },
});

export const { switchTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
