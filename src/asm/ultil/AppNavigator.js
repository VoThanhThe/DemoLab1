import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import Login from '../Login';
import SignUp from '../SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListNew from '../ListNew';
import Profile from '../Profile';
import NewDetail from '../NewDetail';
import { AppContext } from './AppContext';
import UploadNew from '../UploadNew';
import DetailScreen from '../DetailScreen';
import EditProfile from '../EditProfile';
import SettingScreen from '../SettingScreen';
import ResetPassword from '../ResetPassword';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//login, register // stack
const User = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            {/* <Stack.Screen name="Menu" component={tab1} /> */}
        </Stack.Navigator>
    )
}


const News = () => {
    return(
        <Stack.Navigator 
        screenOptions ={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } 

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1877F2',
            tabBarInactiveTintColor: '#4E4B66',
            tabBarLabelStyle: {
                fontSize: 14,
                color: '#4E4B66'
            },
            headerShown: false
        })}>
            <Stack.Screen name='ListNews' component={ListNew}/>
            <Stack.Screen name='NewDetail' component={NewDetail}/>
        </Stack.Navigator>
    )
}
const ProfileScreen = () => {
    return(
        <Stack.Navigator 
        screenOptions ={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Profile') {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                } 

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1877F2',
            tabBarInactiveTintColor: '#4E4B66',
            tabBarLabelStyle: {
                fontSize: 14,
                color: '#4E4B66'
            },
            headerShown: false
        })}>
            <Stack.Screen name='DetailProfile' component={DetailScreen}/>
            <Stack.Screen name='EditProfile' component={Profile}/>
            <Stack.Screen name='SettingScreen' component={SettingScreen}/>
            <Stack.Screen name='ResetPassword' component={ResetPassword}/>

        </Stack.Navigator>
    )
}

//menu buttom // tab
const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Explore') {
                        iconName = focused ? 'compass' : 'compass-outline';
                    }
                    else if (route.name === 'Bookmark') {
                        iconName = focused ? 'bookmark' : 'bookmark-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#1877F2',
                tabBarInactiveTintColor: '#4E4B66',
                tabBarLabelStyle: {
                    fontSize: 14,
                    color: '#4E4B66'
                },
                headerShown: false
            })}
        >
            <Tab.Screen name="Home" component={News}
            // options={{
            //   tabBarIcon: ({ focused }) => {
            //     const icon = focused ? require('./src/asm/images/ic_home.png') : require('./src/asm/images/ic_home0.png');
            //     return (
            //       <Image source={icon} />
            //     );
            //   }
            // }} 

            options={{
                title: 'Trang chủ'
            }}
            />
            <Tab.Screen name="Explore" component={UploadNew}
            options={{
                title: 'Đăng tin'
            }}
            />
            <Tab.Screen name="Bookmark" component={ListNew}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
                title: 'Cá nhân'
            }}
            />
        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <>
            {
                isLogin == false ? <User /> : <Main />
            }
        </>
    )
}

export default AppNavigator