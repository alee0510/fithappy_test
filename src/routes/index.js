/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home/home.js';
import DetailScreen from '../screens/details/detail.js';

// initialize stack navigaton
const Stack = createNativeStackNavigator();

// define stack
function AppNavigation () {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown : false }} />
            <Stack.Screen name="Details" component={DetailScreen} options={{ headerShown : false }} />
        </Stack.Navigator>
    );
}

export default AppNavigation;
