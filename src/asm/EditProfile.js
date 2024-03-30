import { StyleSheet, Text, View,Button, Pressable, TextInput, Image } from 'react-native'
import React,{useState} from 'react'

const EditProfile = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('./Photo/ic_close.png')}
          style={styles.icon} /> */}
        <Text style={styles.textHeader}>Edit Profile</Text>
        {/* <Image source={require('./Photo/ic_check.png')}
          style={styles.icon} /> */}
      </View>
      <View style = {styles.avatar}>
        {/* <Image style = {styles.profile} source={require('./Photo/img_detail.png')}
        resizeMode= "cover"/> */}
      </View>
      <View>
        <View>
          <Text style = {styles.lable}>Username</Text>
          <TextInput style = {styles.textInput}/>
        </View>
        <View>
          <Text style = {styles.lable}>Full Name</Text>
          <TextInput style = {styles.textInput}/>
        </View>
        <View>
          <Text style = {styles.lable}>Email Address*</Text>
          <TextInput style = {styles.textInput}/>
        </View>
        <View>
          <Text style = {styles.lable}>Phone Number*</Text>
          <TextInput style = {styles.textInput}/>
        </View>
        <View>
          <Text style = {styles.lable}>Bio</Text>
          <TextInput style = {styles.textInput}/>
        </View>
        <View>
          <Text style = {styles.lable}>Website</Text>
          <TextInput style = {styles.textInput}/>
        </View>
        
      </View>
    </View>
    </ScrollView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 68,
    
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      icon: {
        width: 17, height: 13
      },
      textHeader: {
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Poppins',
        color: 'black'
      },
      profile: {
        width: 140,
        height: 140,
        borderRadius: 70
    
      },
      avatar: {
        alignItems: 'center',
        marginTop: 16
      },
      textInput: {
        height: 48,
        borderRadius: 6,
        borderWidth: 1,
        marginBottom: 16,
        borderColor: '#4E4B66'
      },
      lable: {
        fontSize: 14,
        color: '#4E4B66',
        marginBottom: 4
      }
})