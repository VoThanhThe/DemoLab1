import { StyleSheet, Text, View, Image, Pressable,FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import ItemListNews from './ItemListNews'
import AxiosIntance from './ultil/AxiosIntance';

const DetailScreen = (props) => {
    const { navigation, route } = props;
    const [dataNe, setdataNe] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const getNewsMe = async () => {
            const response = await AxiosIntance().get("/articles/my-articles");
            console.log(response);
            if (response.error == false) {
                setdataNe(response.data);
                setisLoading(false);
            } else {
                ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
            }
        }
        getNewsMe();
        return () => {

        }
    }, []);

    const clickEditProfile = () => {
        navigation.navigate('EditProfile',);
    }
    const clickSetting = () => {
        navigation.navigate('SettingScreen',);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text></Text>
                <Text style={[styles.textHeader, { fontWeight: 'bold' }]}>Profile</Text>
                <TouchableOpacity onPress={clickSetting}>
                    <Image style={styles.icon} source={require('./images/ic_setting.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Image style={styles.profile} source={require('./images/img_profile.png')} />
                <View style={styles.center}>
                    <Text style={[styles.textHeader, { fontWeight: 'bold' }]}>1230</Text>
                    <Text style={[styles.textHeader, { color: '#4E4B66' }]}>Followers</Text>
                </View>
                <View style={styles.center}>
                    <Text style={[styles.textHeader, { fontWeight: 'bold' }]}>687</Text>
                    <Text style={[styles.textHeader, { color: '#4E4B66' }]}>Following</Text>
                </View>
                <View style={styles.center}>
                    <Text style={[styles.textHeader, { fontWeight: 'bold' }]}>5</Text>
                    <Text style={[styles.textHeader, { color: '#4E4B66' }]}>News</Text>
                </View>
            </View>
            <Text style={styles.textHeader}>Võ Thành Thế</Text>
            <Text style={[styles.textHeader, { color: '#4E4B66', fontWeight: "400", marginBottom: 16 }]}>Lorem Ipsum is simply dummy text of the{'\n'} printing and typesetting industry.</Text>

            <View style={styles.header}>
                <TouchableOpacity >
                    <Pressable style={styles.button} onPress={clickEditProfile}>
                        <Text style={styles.textButton}>Edit profile</Text>
                    </Pressable>
                </TouchableOpacity>

                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Website</Text>
                </Pressable>
            </View>
            <View style={[styles.header, { justifyContent: 'space-evenly' }]}>
                <Text style={[styles.textHeader, { borderBottomWidth: 2, borderBottomColor: '#1877F2' }]}>News</Text>
                <Text style={styles.textHeader}>Recent</Text>
            </View>
            {
                isLoading == true ? (
                    <View >
                        <ActivityIndicator size={'large'} color='#03C988' />
                        <Text style={{ textAlign: "center" }}>Loading...</Text>
                    </View>
                ) : (
                    <FlatList style={styles.flat}
                        data={dataNe}
                        renderItem={({ item }) => <ItemListNews data={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                )

            }

            <TouchableOpacity>
            <View style={styles.Add}>
                <Text style={[styles.textButton, { fontSize: 20 }]}>+</Text>
            </View>
            </TouchableOpacity>
            


        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 24,
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    textHeader: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: 'black',
    },
    icon: {
        width: 20,
        height: 22
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#EEF1F4'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 160,
        height: 50,
        backgroundColor: '#1877F2',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
    },
    Add: {
        width: 54,
        height: 54,
        borderRadius: 29,
        backgroundColor: '#1877F2',
        position: 'absolute',
        bottom: -270,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})