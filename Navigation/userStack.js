import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../src/screens/HomeScreen'
import WorkoutScreen from '../src/screens/WorkoutScreen'
import FitScreen from '../src/screens/FitScreen'
import RestScreen from './../src/screens/RestScreen';
import ProfileScreen from './../src/screens/ProfileScreen';


const Stack=createNativeStackNavigator()
const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false,}}
        initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="WorkOut" component={WorkoutScreen} />
            <Stack.Screen name="Fit" component={FitScreen}/>
            <Stack.Screen name="Rest" component={RestScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )}

export default StackNavigator

const styles = StyleSheet.create({})