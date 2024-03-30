import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './Home';
import Detail from './Detail';
import UpdateNews from './UpdateNews';
import AddNews from './AddNews';
import Search from './Search';
import Favorite from './Favorite';
import ItemFavorite from './ItemFavorite';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Detail' component={Detail} />
            <Stack.Screen name='Add' component={AddNews} />
            <Stack.Screen name='Update' component={UpdateNews} />
        </Stack.Navigator>
    )
}

const header = (title, color) => ({
    title: title,
    headerStyle: { backgroundColor: "#111111" },
    headerTitleAlign: "center",
    headerTitleStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    headerTintColor: color,
    headerLeft: () => {
        <TouchableOpacity onPress={() => alert("Menu click")}>
            <Icon name='menu' size={40} color={"white"} />
        </TouchableOpacity>
    },
    headerRight: () => {
        <TouchableOpacity onPress={() => alert("Search click")}>
            <Icon name='search' size={40} color={"white"} />
        </TouchableOpacity>
    }
})

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeScreen') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'compass' : 'compass-outline';
                    }
                    else if (route.name === 'Favorite') {
                        iconName = focused ? 'bookmark' : 'bookmark-outline';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#1877F2',
                tabBarInactiveTintColor: '#4E4B66',
                tabBarStyle: {
                    backgroundColor: "black",
                    position: "absolute",
                    borderRadius: 50,
                    bottom: 20,
                    marginHorizontal: 20
                },

            })}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={
                    header("Home", "#1877F2")
                }
            />
            <Tab.Screen name='Search' component={Search}
                options={
                    header("Search", "#1877F2")
                }
            />
            <Tab.Screen name='Favorite' component={Favorite}
                options={
                    header("Favorite", "#1877F2")
                }
            />
        </Tab.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})