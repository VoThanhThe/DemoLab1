import { ScrollView, StyleSheet, Text, View, Image, ItemListView, Pressable, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from './ultil/AxiosIntance';

const NewDetail = (props) => {
    const { route } = props;
    const { params } = route;

    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [imageURL, setimageURL] = useState("");

    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const getDetail = async () => {
            const response = await AxiosIntance().get('/articles/' + params.id + "/detail")
            console.log(response);

            if (response.error == false) {
                settitle(response.data[0].title);
                setcontent(response.data[0].content);
                setimageURL(response.data[0].image);
                setisLoading(false);
            } else {
                ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
            }

        }
        getDetail();
        return () => {

        }
    }, [])

    return (
        <>
            {
                isLoading == true ?
                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size={'large'} color='#03C988' />
                        <Text style={{ textAlign: "center" }}>Loading...</Text>
                    </View>
                    :
                    <View style={styles.container}>
                        <ScrollView  showsVerticalScrollIndicator = {false}>
                            <View >
                                <View style={styles.viewHeading}>
                                    <Image style={styles.imageBack} source={require('./images/ic_back.png')} />
                                    <View style={[styles.viewHeading, {}]}>
                                        <Image style={styles.imageShare} source={require('./images/ic_share.png')} />
                                        <Image style={styles.imageMenu} source={require('./images/ic_menu.png')} />
                                    </View>
                                </View>
                                <View style={[styles.viewHeading,]}>
                                    <View style={styles.viewBBCNew}>
                                        <Image style={styles.logoBBCNew} source={require('./images/logo_bbc_news.png')} />
                                        <View style={[styles.viewBBCNew, { marginStart: 4, flexDirection: 'column' }]}>
                                            <Text style={styles.textBBCNew}>BBC News</Text>
                                            <Text style={styles.textDate}>14m ago</Text>
                                        </View>
                                    </View>

                                    <Pressable style={styles.buttonFollow}>
                                        <Text style={[styles.textBBCNew, { color: 'white' }]}>Following</Text>
                                    </Pressable>
                                </View>
                                <Image style={styles.image} source={{ uri: imageURL }} />
                                <Text style={styles.textDate}>Europe</Text>
                                <Text style={styles.textHeading}>{title}</Text>
                                <Text style={[styles.textDate, { fontSize: 16, marginBottom: 60 }]}>{content}</Text>


                            </View>
                        </ScrollView>
                        <View style={styles.viewBottom}>
                            <View style={styles.viewGroupBottom}>
                                <Image style={styles.imageLove} source={require('./images/ic_love.png')} />
                                <Text style={[styles.textDate, { color: '#050505', marginStart: 6 }]}>24.5K</Text>
                                <Image style={styles.imageComment} source={require('./images/ic_comment.png')} />
                                <Text style={[styles.textDate, { color: '#050505', marginStart: 6 }]}>1K</Text>
                            </View>
                            <Image style={styles.imageFavorite} source={require('./images/ic_favorite.png')} />
                        </View>
                    </View>
            }
        </>
    )
}

export default NewDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        fontFamily: "Poppins",

    },
    image: {
        width: 345,
        height: 230,
        borderRadius: 6,
        marginBottom: 20
    },
    imageBack: {
        width: 16,
        height: 15.56,
    },
    imageShare: {
        width: 19,
        height: 21
    },
    imageMenu: {
        width: 3,
        height: 20,
        marginStart: 21.5
    },
    imageLove: {
        width: 20,
        height: 18.5,
    },
    imageComment: {
        width: 20,
        height: 18,
        marginStart: 30
    },
    imageFavorite: {
        width: 16,
        height: 20,
        marginEnd: 28
    },
    logoBBCNew: {
        width: 50,
        height: 50,

    },
    textHeading: {
        fontSize: 24,
        color: "black",
        textAlign: 'left',
        marginTop: 4,
        marginBottom: 16
    },
    textContent: {
        fontSize: 24,
        color: "black",
        textAlign: 'left',
        marginTop: 4,
        marginBottom: 16
    },
    viewHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,

    },
    textBBCNew: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black'
    },
    textDate: {
        fontSize: 14,
        color: '#4E4B66'
    },
    viewBBCNew: {
        flexDirection: 'row',

    },
    buttonFollow: {
        backgroundColor: '#1877F2',
        paddingBottom: 5,
        paddingTop: 5,
        paddingEnd: 10,
        paddingStart: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        height: 34,
        width: 100,
    },
    viewBottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        paddingBottom: 25,
        paddingTop: 25,
        paddingEnd: 24,
        paddingStart: 24,
        backgroundColor: 'white'
    },
    viewGroupBottom: {
        flexDirection: 'row'
    }
})
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
        "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "3",
        "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "4",
        "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "5",
        "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "6",
        "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "7",
        "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    }

]