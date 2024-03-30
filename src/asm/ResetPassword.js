import { StyleSheet, Text, View, Image, Pressable, TextInput,Button, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import AxiosIntance from './ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResetPassword = () => {
    const [passwordUser, setpasswordUser] = useState("");
    const [passwordUserAgain, setpasswordUserAgain] = useState("");

    const Submit = async () => {
        console.log(passwordUser, passwordUserAgain);
    
        if(!passwordUser || !passwordUserAgain){
            Alert.alert('Vui lòng điền đầy đủ thông tin!');
        }else if(passwordUser.trim().length == 0 || passwordUserAgain.trim().length == 0){
            Alert.alert('Vui lòng điền đầy đủ thông tin!');
        }else if(passwordUser === passwordUserAgain){

          try {
            const response = await AxiosIntance()
              .post("/users/change-password",
                {password: passwordUser });
    
            if (response.error == false) {
              ToastAndroid.show("Đổi mật khẩu thành công!", ToastAndroid.SHORT);
              navigation.navigate('Login');
            } else {
              ToastAndroid.show('Đổi mật khẩu thất bại!', ToastAndroid.SHORT);
            }
            console.log(response);
          } catch (e) {
            console.log(e);
            
          }
        }
    
      }
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./images/ic_back.png')} />
            <Text style={styles.text}>Reset{'\n'}Password</Text>
            <View style={styles.viewUsername}>
                <Text style={styles.textUsername}>New Password</Text>
                <Text style={[styles.textUsername, { color: 'red' }]}>*</Text>
            </View>
            <TextInput style={[styles.textInput, { marginBottom: 16 }]} onChangeText={setpasswordUser} />
            <View style={styles.viewUsername}>
                <Text style={[styles.textUsername,]}>Confirm new password</Text>
                <Text style={[styles.textUsername, { color: 'red' }]}>*</Text>
            </View>
            <TextInput style={styles.textInput} onChangeText={setpasswordUserAgain} />
        
        <TouchableOpacity  onPress = {Submit}>
            <Pressable style={styles.button}>
                <Text style={styles.textbutton}>Submit</Text>
            </Pressable>
        </TouchableOpacity >
        <Button title = "Click" onPress = {Submit}/>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1877F2',
        height: 50,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: "center",
    },
    textbutton: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: '#ffffff'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 24
    },
    image: {
        width: 16,
        height: 15.56,
    },
    text: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 48,
        color: '#4E4B66',
        marginTop: 17.22,
        marginBottom: 13,
    },
    viewUsername: {
        flexDirection: 'row'
    },
    textUsername: {
        fontSize: 14,
        color: '#4E4B66'
    },
    textInput: {
        height: 48,
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 4,
        padding: 10
    },

})