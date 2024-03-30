import { View, Text, StyleSheet, TextInput, Pressable, Image, ToastAndroid, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AxiosIntance from './ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from './ultil/AppContext';

const Login = (props) => {
  const { navigation } = props;
  const ClickLogin = () => {
    navigation.navigate('SignUp');
    //navigation.goBack();
  }

  const [emailUser, setEmailUser] = useState('');
  const [passwordUser, setpasswordUser] = useState('');

  const { setisLogin, setinforUser } = useContext(AppContext);
  //http://192.168.1.7:3000/api/user/login
  const dangNhapNe = async () => {
    // if (!emailUser) {
    //   Alert.alert('UserName không được bỏ trống');
    // } else if (emailUser.trim().length == 0) {
    //   Alert.alert('UserName không được bỏ trống');
    // } else if (emailUser.trim().length > 50) {
    //   Alert.alert('UserName không quá 50 ký tự');
    // }else if(!passwordUser){
    //   Alert.alert('Password không được bỏ trống');
    // }
    // else if (passwordUser.trim().length == 0) {
    //   Alert.alert('Password không được bỏ trống');
    // } else if (passwordUser.trim().length > 50) {
    //   Alert.alert('Password không quá 50 ký tự');
    // }
    // else {
      
    // }

    try {
      const response = await AxiosIntance().post("/api/user/login", { email: emailUser, password: passwordUser });
      if (response.error == false) {
        console.log(response.data.token);
        await AsyncStorage.setItem("token", response.data.token);
        ToastAndroid.show('Đăng nhập thành công!', ToastAndroid.SHORT);
        setinforUser(response.data.user);
        setisLogin(true);
      } else {
        ToastAndroid.show('Đăng nhập thất bại!', ToastAndroid.SHORT);
      }
    } catch (e) {
      console.log(e);
    }
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Hello</Text>
      <Text style={[styles.textHeading, { color: '#1877F2' }]}>Again!</Text>
      <Text style={styles.textWelcom}>Welcome back you’ve {'\n'}been missed</Text>
      <View style={styles.viewUsername}>
        <Text style={styles.textUsername}>Username</Text>
        <Text style={[styles.textUsername, { color: 'red' }]}>*</Text>
      </View>
      <TextInput style={[styles.textInput, { marginBottom: 16 }]} onChangeText={setEmailUser} />
      <View style={styles.viewUsername}>
        <Text style={[styles.textUsername,]}>Password</Text>
        <Text style={[styles.textUsername, { color: 'red' }]}>*</Text>
      </View>
      <TextInput style={styles.textInput} onChangeText={setpasswordUser} />
      <View style={[styles.viewRememberme, { justifyContent: 'space-between', marginTop: 8 }]}>
        <View style={styles.viewRememberme}>
          <BouncyCheckbox fillColor='blue' />
          <Text style={styles.textUsername}>Remember me</Text>
        </View>
        <Text style={styles.textForgotPassword}>Forgot the password ?</Text>
      </View>
      <Pressable style={styles.buttonLogin} onPress={dangNhapNe} >
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>
      <Text style={[styles.textUsername, { textAlign: 'center', marginTop: 16 }]}>or continue with</Text>

      <View style={styles.viewSocial}>
        <Pressable style={styles.buttonSocial}>
          <Image style={styles.imageSocial} source={require('./images/ic_fb.png')} />
          <Text style={styles.textSocial}>Facebook</Text>
        </Pressable>
        <Pressable style={styles.buttonSocial}>
          <Image style={styles.imageSocial} source={require('./images/ic_gg.png')} />
          <Text style={styles.textSocial}>Google</Text>
        </Pressable>
      </View>
      <View style={[styles.viewUsername, { marginTop: 16, justifyContent: "center" }]}>
        <Text style={[styles.textUsername,]}>don’t have an account ?  </Text>
        <Text style={[styles.textUsername, { color: '#1877F2', fontWeight: 'bold' }]} onPress={ClickLogin} >Sign Up</Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    paddingStart: 24,
    paddingEnd: 24,
    paddingTop: 24,
    paddingBottom: 8,
    flex: 1,
    fontFamily: "Poppins",
  },
  textHeading: {
    fontSize: 48,
    fontWeight: "bold",
    color: '#050505'
  },
  textWelcom: {
    marginTop: 4,
    fontSize: 20,
    color: '#4E4B66',
    marginBottom: 40
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
  viewUsername: {
    flexDirection: 'row'
  },
  viewRememberme: {
    flexDirection: 'row'
  },
  textForgotPassword: {
    color: "#5890FF"
  },
  buttonLogin: {
    height: 50,
    backgroundColor: '#1877F2',
    marginTop: 16,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  imageSocial: {
    width: 21,
    height: 21,
  },
  buttonSocial: {
    width: 160,
    height: 48,
    backgroundColor: '#EEF1F4',
    flexDirection: 'row',
    borderRadius: 6,
    paddingStart: 24,
    paddingTop: 12,
    paddingEnd: 24,
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSocial: {
    fontSize: 16,
    color: '#667080',
    marginStart: 11.5,
  },
  viewSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  }
})