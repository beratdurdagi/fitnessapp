import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Login from './../src/screens/Login';
import Register from './../src/screens/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './../src/screens/WelcomeScreen';




const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>

      <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}