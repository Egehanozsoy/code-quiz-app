import React from 'react';
import { Dimensions } from 'react-native';

export const COLORS = {
  white: '#fff',
  primary: '#000',
  lightGrey: '#E7E7E7',
};

export const SPACING = {
  small: 8,
  mSmall: 10,
  medium: 16,
  big: 32,
};

export const CONTENT_WIDTH = Dimensions.get('screen').width - 32;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const roundedFull = 200;
export const roundedSmall = 5;
export const roundedLarge = 15;
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
const theme = themes.light;
export const ThemeContext = React.createContext({
  theme,
  toggleTheme: () => {},
});
