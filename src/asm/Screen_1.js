import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Screen_1 = (props) => {
    const {navigation} = props; 
    const ClickNe = () =>{
        //Truyền tên Screen muốn chuyển qua vào navigate
        navigation.navigate('Screen2');
        }
  return (
    <View>
      <Text>Screen_1</Text>
      <Pressable style = {{backgroundColor: 'green', padding: 24, borderRadius: 50}} onPress = {ClickNe}>
        <Text>Go to screen 2</Text>
      </Pressable>
    </View>
  )
}

export default Screen_1

const styles = StyleSheet.create({})