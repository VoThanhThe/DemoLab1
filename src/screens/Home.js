import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, {useState, useEffect} from 'react'
import ItemListNews from '../components/ItemListNew'
import Icon from 'react-native-vector-icons/Ionicons'

import { useDispatch, useSelector } from 'react-redux'

const Home = (props) => {
    const {navigation} = props
    const [dataNew, setDataNew] = useState([]);
    const items = useSelector((state) => state.newsReducer);
    const data = items.news;
    useEffect(() => {
        setDataNew(items.news)
    }, []);
    // console.log(data);
    
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item, index}) => <ItemListNews data = {item} index = {index} navigation = {navigation} />}
                keyExtractor={(item) => item._id}
                // removeClippedSubviews={true}
                maxToRenderPerBatch = {2}
            />
            <TouchableHighlight onPress={() => navigation.push("Add")} style = {{position: "absolute", bottom: 40, right: 20, backgroundColor: "#ffffff", padding: 20, borderRadius: 1000}}>
                <Icon name='newspaper' size={30} color={"red"} />
            </TouchableHighlight>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
    }
});