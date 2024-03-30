import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Screen_2 = (props) => {
    const {navigation} = props;
    const ClickDia = () => {
        navigation.navigate('Screen1');
        //navigation.goBack();
    }
  return (
    <View>
      <Text>Screen_2</Text>
      <Pressable onPress={ClickDia} style = {{backgroundColor: 'blue', padding: 24, borderRadius: 50}}>
        <Text>Go to screen 1</Text>
      </Pressable>
    </View>
  )
}

export default Screen_2

const styles = StyleSheet.create({})