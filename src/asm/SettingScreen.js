import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from './ultil/AppContext'

const SettingScreen = (props) => {
    const {navigation} = props;
    const {setisLogin} = useContext(AppContext);

    const logout = () => {
        setisLogin(false);
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewHeading}>
                <Image style={styles.imageBack} source={require('./images/ic_back.png')} />
                <Text style={[styles.textHeading]}>Settings</Text>
                <Text></Text>
            </View>
            <TouchableOpacity>
                <View style = {styles.groupItem}>
                    <View style = {styles.item}>
                        <Image style = {styles.icon} source={require('./images/ic_notification.png')} />
                        <Text style = {styles.text}>Notification</Text>
                    </View>
                    <Text style = {styles.text}>{'>'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('ResetPassword')}}>
                <View style = {styles.groupItem}>
                    <View style = {styles.item}>
                        <Image style = {styles.icon} source={require('./images/ic_lock.png')} />
                        <Text style = {styles.text}>Reset Password</Text>
                    </View>
                    <Text style = {styles.text}>{'>'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.groupItem}>
                    <View style = {styles.item}>
                        <Image style = {[styles.icon,{width: 20, height: 20}]} source={require('./images/ic_security.png')} />
                        <Text style = {styles.text}>Help</Text>
                    </View>
                    <Text style = {styles.text}>{'>'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.groupItem}>
                    <View style = {styles.item}>
                        <Image style = {[styles.icon,{width:20, height: 20}]} source={require('./images/ic_dark.png')} />
                        <Text style = {styles.text}>Dark Mode</Text>
                    </View>
                    <Text style = {styles.text}>{'>'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={logout}>
                <View style = {styles.groupItem}>
                    <View style = {styles.item}>
                        <Image style = {styles.icon} source={require('./images/ic_logout.png')} />
                        <Text style = {styles.text}>Logout</Text>
                    </View>
                    <Text style = {styles.text}>{'>'}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingEnd: 24,
        paddingStart: 24,
        paddingTop: 24,
        fontFamily: "Poppins",
        backgroundColor: '#ffffff'

    },
    imageBack: {
        width: 16,
        height: 15.56,
    },

    icon: {
        width: 16,
        height: 18,
        marginEnd: 10
    },
    textHeading: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "black",
        textAlign: 'center'
    },
    viewHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    groupItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 24,
        marginBottom: 49
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    text:{
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        color: '#000000'
    }
})