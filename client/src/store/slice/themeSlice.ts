import { createSlice } from '@reduxjs/toolkit';

interface themeType {
  theme: 'dark' | 'light';
}

const initialState: themeType = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
