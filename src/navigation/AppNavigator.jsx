import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, PickTopicScreen } from '../screens';

const HomeStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
        name="PickTopicScreen"
        component={PickTopicScreen}
      />
    </HomeStack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
    </Tabs.Navigator>

  );
}

export default AppNavigator;
