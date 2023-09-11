import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '@screens/login/index';
import RegisterScreen from '@screens/register';

import DropdownScreen from '@screens/theme/dropdown';
import CheckboxTreeScreen from '@screens/theme/checkboxTree';
import TimerScreen from '@screens/theme/timer';
import CountdownScreen from '@screens/theme/countdown';
import SwipeViewScreen from '@screens/theme/swipeView';
import MultiSelectScreen from '@screens/theme/multiselect';
import TextInputScreen from '@screens/theme/textinput';
import AvatarScreen from '@screens/theme/avatar';
import CheckboxScreen from '@screens/theme/checkbox';
import {tabBar} from './bottombar';
import HomeScreen from '@screens/home';

export const navigationRef: React.RefObject<NavigationContainerRef<any>> =
  React.createRef();
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Dropdown" component={DropdownScreen} />
        <Stack.Screen name="MultiSelect" component={MultiSelectScreen} />
        <Stack.Screen name="CheckboxTree" component={CheckboxTreeScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen name="Countdown" component={CountdownScreen} />
        <Stack.Screen name="SwipeView" component={SwipeViewScreen} />
        <Stack.Screen name="TextInput" component={TextInputScreen} />
        <Stack.Screen name="Avatar" component={AvatarScreen} />
        <Stack.Screen name="Checkbox" component={CheckboxScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
