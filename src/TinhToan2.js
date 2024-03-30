import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TinhToan2 = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.view1}></View>
        <View style = {styles.view2}></View>
        <View style = {styles.view3}></View>
        <View style = {styles.view4}></View>
        
    </View>
  )
}

export default TinhToan2

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        
    },
    container: {
        backgroundColor: "green",
        flex: 1,
        flexDirection: 'row'
    },
    view1: {
        width: 50,
        height: 50,
        backgroundColor: 'black'
    },
    view2: {
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    },
    view3: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    view4: {
        width: 50,
        height: 50,
        backgroundColor: 'white'
    }
})