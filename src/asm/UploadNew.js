import { StyleSheet, Text, View, Image, Button, TextInput, Pressable, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './ultil/AxiosIntance'

const UploadNew = () => {
  const [imageNe, setimageNe] = useState("");
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("")

  const capture = async () => {
    try{
      const result = await launchCamera();
      console.log(result.assets[0].uri);
  
      // const formdata = new FormData();
      // formdata.append('image', {
      //   uri: result.assets[0].uri,
      //   type: 'image/jpeg',
      //   name: 'image/jpg',
      // });

      const formdata = new FormData();
      formdata.append('image', {
        uri: result.assets[0].uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });
  
      const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
      console.log(response);
      console.log(response.data.path);
  
      if (response.error == false) {
        setimageNe(response.data.path);
        ToastAndroid.show('Thành Công', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Upload image failed', ToastAndroid.SHORT);
      }
    }catch(e){
      console.log("====> " + e);
    }
    
  }
  

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
  
      if (response.error == false) {
        setimageNe(response.data.path);
        ToastAndroid.show('Thành Công', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Upload image failed', ToastAndroid.SHORT);
      }
  }

  const publich = async () => {
    if(!title || !content || !imageNe){
      Alert.alert('Vui lòng chọn đủ ảnh, và điền thông tin còn thiếu');
    }else {
      const response = await AxiosIntance().post('/articles', {title: title, content: content, image: imageNe});
      if(response.error == false){
        ToastAndroid.show('Đăng tin thành công', ToastAndroid.SHORT);
      }else{
        ToastAndroid.show('Đăng tin thất bại', ToastAndroid.SHORT);
      }
    }
    
  }

  return (

    <View style={styles.container}>
      <View >
        <View style={styles.header}>
          <Image style={styles.icon} source={require('./images/ic_back.png')} />
          <Text style={styles.textHeader}>Create News</Text>
          <Image style={[styles.icon, { width: 3 }]} source={require('./images/ic_menu.png')} />
        </View>
        <>
          {
            imageNe ? <Image style={styles.image} resizeMode= 'cover' source={{uri: imageNe}}/>
              :
              <View style={styles.AddPhoto}>
                <Text style={[styles.textPhoto, { fontSize: 25 }]}>+</Text>
                <Text style={styles.textPhoto}>Add Cover Photo</Text>
              </View>
          }
        </>

        <View style={styles.ButtonContainer}>
          <Pressable style={styles.Button} onPress={capture} >
            <Text style={styles.textButton}>Camera</Text>
          </Pressable>
          <Pressable style={styles.Button} onPress={getImageLibrary}>
            <Text style={styles.textButton}>Library</Text>
          </Pressable>
        </View>

        <TextInput style={[styles.input, { borderBottomWidth: 1 }]} placeholder='News title'  onChangeText={settitle}/>
        <TextInput style={[styles.input, { fontSize: 16, lineHeight: 24, }]} placeholder='Add News/Article' onChangeText={setcontent} />
      </View>

      <Pressable style={styles.Public} onPress={publich}>
        <Text style={styles.textButton}>Public</Text>
      </Pressable>
    </View>
  )
}

export default UploadNew

const styles = StyleSheet.create({
  image: {
    marginTop: 16,
    width: '100%',
    height: 183,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    position: 'relative',

  },
  icon: {
    height: 18,
    width: 18,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textHeader: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    lineHeight: 24,

  },
  textPhoto: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    lineHeight: 21,

  },
  AddPhoto: {
    marginTop: 16,
    width: '100%',
    height: 183,
    borderWidth: 1,
    borderColor: '#4E4B66',
    borderStyle: 'dashed',
    backgroundColor: '#EEF1F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#1877F2',
    justifyContent: 'center',
    alignItems: 'center'

  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16
  },
  input: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 36,
    color: 'black',
    borderBottomColor: '#A0A3BD'
  },
  Public: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#1877F2",
    justifyContent: 'center',
    alignItems: 'center',

    height: 50,

  },
  textButton: {
    color: 'white', fontSize: 16, fontWeight: '600', lineHeight: 24
  }
})