import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemListNews from './asm/ItemListNews'
import axios from 'axios'

const ListApi = () => {
    const [dataNe,setDataNe] = useState([]);
    useEffect(() => {
        const getNews = async () => {
        console.log('aaaaaas');
        const res = await axios.get('https://63e44be78e1ed4ccf6dd8b20.mockapi.io/News');
        if(res != ""){
        setDataNe(res.data);
        }
        }
        getNews();
        return ()=>{}
        }, []);
  return (
    <View>
      <FlatList style={styles.flat}
                data={dataNe}
                renderItem={({ item }) => <ItemListNews data={item} />}
                keyExtractor={item => item.id}
            />
    </View>
  )
}

export default ListApi

const styles = StyleSheet.create({})