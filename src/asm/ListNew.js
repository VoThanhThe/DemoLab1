import { StyleSheet, Text, View, Image, FlatList, ScrollView, ToastAndroid, ActivityIndicator, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemListNews from './ItemListNews'
import AxiosIntance from './ultil/AxiosIntance';

const ListNew = (props) => {
    const { navigation } = props;
    const [dataNe, setdataNe] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const [searchText, setsearchText] = useState(null)
    useEffect(() => {
        const getNews = async () => {
            const response = await AxiosIntance().get("/api/product");
            console.log(response);
            if (response.error == false) {
                ToastAndroid.show("Lấy dữ liệu thành công", ToastAndroid.SHORT);
            } else {
                ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
            }
        }
        getNews();
        return () => {

        }
    }, []);

    let timeout = null;
    const countDownSearch = () => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            search();
        }, 3000);

    }

    const search = async () => {
        setisLoading(true);
        const response = await AxiosIntance().get('/articles/search?title=' + searchText);
        if (response.error == false) {
            setdataNe(response.data);
            setisLoading(false);
        } else {
            ToastAndroid.show('Lấy dữ liệu thất bại', ToastAndroid.SHORT);
        }
    }

    return (

        <View style={styles.container}>

            <View style={styles.viewHeading}>
                <Image style={styles.imageLogo} source={require('./images/logo_kalar.png')} />
                <Image style={styles.imageChuong} source={require('./images/ic_notification.png')} />
            </View>
            <View style={styles.viewAll}>
                <Text style={styles.textLates}>Latest</Text>
                <Text style={styles.textSeeall}>See all</Text>
            </View>

            <View style={styles.headerInput}>
                <TextInput style={styles.input} placeholder='Search...' onChangeText={setsearchText} />
                <TouchableOpacity onPress={search}>
                    <Image style={styles.icon} source={require('../asm/images/ic_search.png')} />
                </TouchableOpacity>

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
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                )

            }



        </View>


    )
}

export default ListNew

const dataNew = [
    {
        "_id": "1",
        "title": "Trường công lập đầu tiên dạy và thi chương trình dự bị đại học Mỹ",
        "content": "Phổ thông Năng khiếu là trường công lập đầu tiên ở Việt Nam dạy và thi 6 môn của chương trình Advanced Placement (AP), thường gọi là chương trình dự bị đại học Mỹ.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/02/02/328463889-891024988600042-6177-9136-2603-1675295134.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BCVEDMn0Smx1XLiCRi0rrA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "2",
        "title": "Lịch thi đánh giá năng lực, tư duy năm 2023",
        "content": "Các kỳ thi đánh giá năng lực, tư duy diễn ra từ tháng 3 đến 7, thí sinh có thể tham dự nhiều đợt và đăng ký từ đầu tháng 2.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/117f5804708184dfdd90-162556098-1999-1999-1675148782.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=Ie6cEqbs1YL8PDAG85QrsA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "3",
        "title": "Đối phó với bài tập Tết",
        "content": "Ngày nghỉ Tết cuối cùng, hàng chục trang bài tập Toán, Tiếng Việt và Tiếng Anh của Anh Thư được giải quyết, nhưng do mẹ và dì làm giúp.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/4313-1662984910-1675082690-4516-1675083076.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=BnjiAv8Bq8iaZcGQ2jJC3Q",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "4",
        "title": "Đường trở thành giáo viên ở Mỹ của một phụ nữ Việt",
        "content": "Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4Pvlut0Bl1rw",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "5",
        "title": "Cô giáo đèo hai con giữa mưa rét, vượt 100 km đến trường",
        "content": "Cô Nguyễn Thị Hà gây xúc động khi đèo hai con, vượt 100 km trong mưa lạnh để trở lại điểm trường ở xã Trà Dơn, huyện Nam Trà My, sau Tết.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/untitled-1675115482-6811-1675116325.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=sDv36arZmV-B6KEYjStHbA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "6",
        "title": "Nam sinh trả lại hơn 40 triệu đồng nhặt được",
        "content": "Lê Hải Thăng, 17 tuổi, được tuyên dương vì nộp lại túi nylon đựng hơn 40 triệu đồng nhặt được hôm 29 Tết.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/tuyenduongnamsinh-1675076463-2581-1675077291.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=vlqGCurXgocetWe4SYl13g",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "7",
        "title": "Cho con đi ngắm trăng, sao từ bé",
        "content": "Từ khi 4 tuổi, con trai chị Hồng Anh đã được đưa đi ngắm nhật thực, mưa sao băng và tham gia câu lạc bộ thiên văn trẻ em.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/danny-kim-png-1929-1673698701-1199-6656-1675037287.png?w=300&h=180&q=100&dpr=1&fit=crop&s=uYWNW2YjIsttuhLT4s8fqQ",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    }
]


const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: '#ffffff'
    },
    flat: {
        paddingStart: 8,
        paddingEnd: 8,

    },
    viewHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    imageLogo: {
        width: 100,
        height: 30,
    },
    imageChuong: {
        width: 18,
        height: 21.5
    },
    viewAll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    textLates: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textSeeall: {
        color: '#4E4B66',
        fontSize: 14
    },
    viewGroupMenu: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewMenu: {
        backgroundColor: 'white',
        height: 78,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textMenu: {
        fontSize: 14,
        color: "#4E4B66",
        marginTop: 4,
    },
    input: {
        width: '100%',
        height: 48,
        borderRadius: 5,
        backgroundColor: '#FFFFFF'
        , borderWidth: 1,
        paddingLeft: 50
    }
    , icon: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: -33,
        left: 18,
    },
    headerInput: {
        position: "relative",
        marginBottom: 8,
    },
})