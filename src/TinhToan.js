import { View, Text, Button, Pressable } from 'react-native'
import React,{useState} from 'react'

const TinhToan = () => {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(1);
    const [result, setresult] = useState(3);

    const luaChon = (isChoose) => {
        let tong = num1 + num2;


        if((tong == result && isChoose == true) || (tong != result && isChoose == false)){
            alert('Bạn đã chọn đúng');
            setnum1(Math.floor(Math.random() * 10));
        setnum2(Math.floor(Math.random() * 10));
        setresult(Math.floor(Math.random() * 10));
        }else{
            alert('Bạn đã chọn sai');
        }
        
    }
  return (
    <View style = {{margin: 10}}>
      <Text style={{color: 'red', fontWeight: 'bold', textAlign: 'center', fontSize: 40}}>Bạn Giỏi Phép Cộng</Text>
        <Text style = {{color: 'blue', 
        fontWeight: 'bold', 
        fontSize: 50, 
        textAlign: 'center'}}>{num1} + {num2}</Text>
        <Text style = {{color: 'blue', fontWeight: 'bold', fontSize: 50, textAlign: 'center'}}>=</Text>
        <Text style = {{color: 'blue', fontWeight: 'bold', fontSize: 50, textAlign: 'center'}}>{result}</Text>
        <Pressable onPress={() => luaChon(true)} style = {{borderWidth: 0, padding: 10, backgroundColor: 'green', borderRadius: 10}}>
            <Text style = {{color: 'white', 
            textAlign: 'center',
            fontSize: 20, 
            fontWeight: 'bold'}}>Đúng</Text>
        </Pressable>
        <Pressable onPress={() => luaChon(false)} style = {{borderWidth: 0, padding: 10, backgroundColor: 'gray', marginTop: 10, borderRadius: 10}}>
            <Text style = {{color: 'white', textAlign: 'center',fontSize: 20, fontWeight: 'bold', }}>Sai</Text>
        </Pressable>

    </View>
  )
}

export default TinhToan