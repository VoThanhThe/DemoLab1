import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { removeFavorite } from '../redux/actions/FavoriteAction'


const ItemFavorite = (props) => {
  const { data } = props
  const dispath = useDispatch();
  return (
    <View style={{ width: "47.8%", backgroundColor: "yellow", padding: 10, margin: "1%" }}>
      <Image source={{ uri: data.image }} style={{ width: "100%", height: 150 }} />
      <Text>{data.title}</Text>
      <TouchableOpacity onPress={() => dispath(removeFavorite(data))} style={{ position: "absolute", right: 10, top: 10 }}>
        <Icon name='heart' size={32} color={"red"}  />
      </TouchableOpacity>
    </View>
  )
}

export default ItemFavorite

const styles = StyleSheet.create({})