import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemListNews = (props) => {
    const { data, navigation } = props;
    const clickItem = () => {
        console.log("Click Item");
        navigation.navigate('NewDetail', { id: data._id });
    }
    return (
        <TouchableOpacity onPress={clickItem}>
            <View >
                <View style={styles.item}>
                    <Image style={styles.image} source={{ uri: data.image }} resizeMode='cover' />
                    <View style={styles.content}>
                        <View>
                            <Text style={styles.textTitle}>{data.title}</Text>
                            <Text style={styles.textContent} numberOfLines={2}>{data.content}</Text>
                        </View>
                        <View style={styles.viewBBCNew}>
                            <Image style={styles.logoBBCNew} resizeMode='cover' source={require('./images/logo_bbc_news.png')} />
                            <View style={[styles.viewBBCNew, { marginStart: 4, flexDirection: 'row' }]}>
                                <Text style={styles.textBBCNew}>BBC News</Text>
                                <Text style={styles.textDate}>.14m ago</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </TouchableOpacity>



    )
}

export default ItemListNews

const styles = StyleSheet.create({
    image: {
        width: 96,
        height: 96,
        borderRadius: 6,
    },
    container: {
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        marginBottom: 20,
        fontFamily: 'Poppins'
    },
    textTitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textContent: {
        fontSize: 14,

    },
    content: {
        marginStart: 6,
        width: Dimensions.get('window').width - 159,
        justifyContent: 'space-between'
    },
    viewHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageLogo: {
        width: 100,
        height: 30,
    },
    imageChuong: {
        width: 18,
        height: 21
    },
    viewBBCNew: {
        flexDirection: 'row',

    },
    logoBBCNew: {
        width: 20,
        height: 20,

    },
    textBBCNew: {
        fontSize: 13,
        fontWeight: "600",
        color: '#4E4B66'
    },
    textDate: {
        fontSize: 13,
        color: '#4E4B66',
        fontWeight: '400',
        marginStart: 10
    },
})