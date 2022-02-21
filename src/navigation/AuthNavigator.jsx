import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen } from '../screens';

function AuthNavigator() {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="IntroScreen"
        component={IntroScreen}
      />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
