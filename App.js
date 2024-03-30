/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native'

import {
  SafeAreaView, Text, View, Button, Image, StyleSheet, TextInput, Pressable, ScrollView
} from 'react-native';
import Profile from './src/asm/Profile';
import NewDetail from './src/asm/NewDetail';
import ListNew from './src/asm/ListNew';
import { AppContextProvider } from './src/asm/ultil/AppContext';
// import AppNavigator from './src/asm/ultil/AppNavigator';
import ResetPassword from './src/asm/ResetPassword';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './src/screens/AppNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <AppContextProvider>
    //   <NavigationContainer>
    //     <AppNavigator/>
    //   </NavigationContainer>
    // </AppContextProvider>
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({

})
