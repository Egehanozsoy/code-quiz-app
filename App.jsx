import { useFonts } from 'expo-font';
import React, { useMemo, useState } from 'react';
import './src/constants/Firebase';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';
import store from './src/redux';
import RootNavigation from './src/navigation';
import { ThemeContext, themes } from './src/constants/theme';

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);
const PoppinsMedium = require('./assets/fonts/Poppins-Medium.ttf');
const PoppinsBold = require('./assets/fonts/Poppins-Bold.ttf');
const PoppinsRegular = require('./assets/fonts/Poppins-Regular.ttf');

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  const providerValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  const [loaded] = useFonts({
    PoppinsBold,
    PoppinsMedium,
    PoppinsRegular,
  });
  if (!loaded) return null;

  return (
    <ThemeContext.Provider value={providerValue}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </ThemeContext.Provider>

  );
}
