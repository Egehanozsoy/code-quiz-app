import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase/app';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { authSuccess } from '../redux/auth/actions';
import 'firebase/auth';

function RootNavigation() {
  const dispatch = useDispatch();
  const [appIsReady, setAppIsReady] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);

  const handleAuthenticationStateChanges = async () => {
    try {
      firebase.auth().onAuthStateChanged(async (user) => {
        await dispatch(authSuccess(user));
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleAuthenticationStateChanges();
  }, []);

  if (!appIsReady) return <Text>not ready</Text>;
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {currentUser ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </View>
  );
}

export default RootNavigation;
