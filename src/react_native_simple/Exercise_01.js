import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState}  from 'react'

const Exercise_01 = () => {
  const [hoTen, setHoTen] = useState('Top Left')
  const [hoTen1, setHoTen1] = useState('Bottom Right')
  return (
    <View style = {styles.container}>
      <TextInput style = {styles.input} 
      //value = {hoTen}
      placeholder = 'Top Left'
      //onChangeText={setHoTen}  
      />
      <View style = {styles.oval}>
        <Text style = {styles.text}>Center</Text>
      </View>
      <TextInput style = {[styles.input, {backgroundColor: '#85CDFD', color: 'white', borderWidth: 0, borderRadius: 50}]} 
      value = {hoTen1}
      onChangeText={setHoTen1}  />
    </View>
  )
}

export default Exercise_01

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1FFF3',
        paddingHorizontal: 24,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
        
    },
    input: {
      width: 350,
      paddingLeft: 20,
      height: 50,
      borderWidth: 2,
      borderRadius: 3,
      borderColor: '#EA8FEA',
      backgroundColor: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'blue'
    },
    oval: {
      width: 140,
      height: 140,
      borderRadius: 70,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    }
})