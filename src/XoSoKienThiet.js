import { View, Text, TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'

const XoSoKienThiet = () => {
    const [soDuDoan, setsoDuDoan] = useState(-1);
    const [result, setresult] = useState('Kết quả sẽ hiển thị ở đây!');
    
    const DuDoan = () => {
        let numRand = Math.floor(Math.random() * 100) + 1;
        console.log(numRand);
        if(soDuDoan == numRand){
            setresult('Bạn đã đoán chính xác số '+ numRand);
        }else{
            setresult('Rất tiếc. Bạn đoán sai mất rồi!')
        }
    }
  return (
    <View style = {{padding: 20}}>
      <Text style = {{color: 'blue', 
      fontSize: 40, 
      fontWeight: 'bold', 
      textAlign: 'center'}}>Xổ Số Kiến Thiết</Text>

      <Text style = {{color: 'green', 
      fontSize: 20, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      marginTop: 20}}>Nhập một số từ 1 đến 100</Text>

      <TextInput onChangeText={newText => setsoDuDoan(newText)} placeholder='Nhập 1 số' style = {{borderWidth : 2, 
        paddingLeft: 10, 
        marginTop: 10, fontSize : 20, borderRadius: 10,}}/>
        <Pressable onPress={DuDoan}>
            <Text style = {{padding: 10, textAlign: 'center', backgroundColor: 'yellow', 
            borderRadius: 20, fontSize: 30, fontWeight: 'bold', 
            marginTop: 10}}>Quay Số</Text>
        </Pressable>
        <Text style = {{textAlign: 'center', marginTop: 5,
        fontSize: 18, color: 'red'}}>{result}</Text>
    </View>
  )
}

export default XoSoKienThiet