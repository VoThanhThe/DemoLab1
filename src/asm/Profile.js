import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from './ultil/AppContext'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './ultil/AxiosIntance'

const Profile = () => {
    const { inforUser , setinforUser} = useContext(AppContext);
    console.log(inforUser);
    const getImageLibrary = async () => {
        const result = await launchImageLibrary();
          console.log(result);
          console.log(result.assets[0].uri);
      
          const formdata = new FormData();
          formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg',
          });
          
      
          const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
          console.log(response);
          console.log(response.data.path);
      
          setinforUser({...inforUser, avatar: response.data.path})
      }

      const updateProfile = async  () => {
        const response = await AxiosIntance(). post('/users/update-profile', {name: inforUser.name, address: inforUser.address, phone: inforUser.phone, dob: inforUser.dob, avatar: inforUser.avatar})
        if (response.error == false) {
            ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT);
          } else {
            ToastAndroid.show('Cập nhật thất bại', ToastAndroid.SHORT);
          }
    }
    return (
        
            
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator = {false}>
                    <View style={styles.viewHeading}>
                        <Image style={styles.imageBack} source={require('./images/ic_back.png')} />
                        <Text style={[styles.textHeading]}>Edit Profile</Text>
                        <TouchableOpacity onPress={updateProfile}>
                            <Image style={styles.icon} source={require('./images/ic_check.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewIMGProfile}>
                        {
                            inforUser.avatar == ""
                                ?
                                <Image style={styles.image_profile} />
                                :
                                <Image style={styles.image_profile} source={{uri : inforUser.avatar}}/>
                        }

                        <TouchableOpacity onPress={getImageLibrary}>
                            <Image style={styles.image_camera} source={require('./images/img_camera.png')} />
                        </TouchableOpacity>
                    </View>


                    <View style={[styles.viewUsername, { marginTop: 16 }]}>
                        <Text style={styles.textUsername}>Full Name</Text>
                    </View>
                    <TextInput value={inforUser.name} onChangeText = {(text) => setinforUser({...inforUser, name: text})} style={[styles.textInput, { marginBottom: 16 }]} />
                    <View style={styles.viewUsername}>
                        <Text style={[styles.textUsername,]}>Date Of Birth</Text>
                    </View>
                    <TextInput value={inforUser.dob} onChangeText = {(text) => setinforUser({...inforUser, dob: text})} style={styles.textInput} />
                    <View style={[styles.viewUsername, { marginTop: 16 }]}>
                        <Text style={styles.textUsername}>Address</Text>
                        <Text style={[styles.textUsername, { color: 'red' }]}>*</Text>
                    </View>
                    <TextInput value={inforUser.address} onChangeText = {(text) => setinforUser({...inforUser, address: text})} style={[styles.textInput, { marginBottom: 16 }]} />
                    <View style={styles.viewUsername}>
                        <Text style={[styles.textUsername,]}>Phone Number</Text>
                        <Text style={[styles.textUsername, { color: 'red' }]}>*</Text>
                    </View>
                    <TextInput value={inforUser.phone} onChangeText = {(text) => setinforUser({...inforUser, phone: text})} style={styles.textInput} />
                    </ScrollView>
                </View>

                
           
        
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        fontFamily: "Poppins",
        backgroundColor: '#FFFFFF'

    },
    imageBack: {
        width: 16,
        height: 15.56,
    },

    icon: {
        width: 17,
        height: 12,
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
        alignItems: 'center'
    },
    image_profile: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: '#F0EEED',
    },
    viewIMGProfile: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    image_camera: {
        width: 30,
        height: 30,
        position: 'absolute',
        bottom: 0,
        right: 15,
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
    viewNext: {
        marginTop: 70,
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        height: 100,
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: 25,
        paddingBottom: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonNext: {
        backgroundColor: '#1877F2',
        width: 350,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    textNext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})