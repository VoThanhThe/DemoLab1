import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, TouchableOpacity, Alert, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addNewAction, removeNewAction, updateNewAction } from "../redux/actions/NewAction"

const UpdateNews = (props) => {
    const {route} = props;
    const {params} = route;
    const {item} = params;

    const [title, setTitle] = useState(item.title);
    const [content, setContent] = useState(item.content);
    const [image, setImage] = useState(item.image);
    const navigation = useNavigation();
    const dispath = useDispatch();

    const Submit = () => {
        const result = {
            _id: item._id,
            title: title,
            content: content,
            image: image
        }
        console.log("Kết quả", result);
        dispath(updateNewAction(result));
        navigation.push('Home');
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.image} source={require('../asm/images/ic_back.png')} />
                </TouchableOpacity>
                <Text style={styles.text}>More{'\n'}Latest News</Text>
                <Image resizeMode='contain'
                    style={{ width: '100%', height: 200, marginBottom: 10, borderRadius: 20 }}
                    source={{ uri: image }} />
                <View style={styles.viewUsername}>
                    <Text style={styles.textUsername}>Title News</Text>
                    <Text style={[styles.textUsername, { color: 'red' }]}>*</Text>
                </View>
                <TextInput style={[styles.textInput, { marginBottom: 16 }]}
                    onChangeText={setTitle}
                    value={title}
                    placeholder='Title' />
                <View style={styles.viewUsername}>
                    <Text style={[styles.textUsername,]}>Content News</Text>
                    <Text style={[styles.textUsername, { color: 'red' }]}>*</Text>
                </View>
                <TextInput style={[styles.textInput, { height: 200 }]}
                    editable
                    multiline
                    numberOfLines={10}
                    maxLength={150}
                    onChangeText={setContent}
                    value={content}
                    placeholder='Content' />

                <TouchableOpacity style={styles.button} onPress={Submit}>
                    <Text style={styles.textbutton}>Submit</Text>
                </TouchableOpacity >
            </View>
        </ScrollView>
    )
}

export default UpdateNews

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1877F2',
        height: 50,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 24
    },
    textbutton: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: '#ffffff'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 24
    },
    image: {
        width: 16,
        height: 15.56,
    },
    text: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 48,
        color: '#4E4B66',
        marginTop: 17.22,
        marginBottom: 13,
    },
    viewUsername: {
        flexDirection: 'row'
    },
    textUsername: {
        fontSize: 14,
        color: '#4E4B66'
    },
    textInput: {
        height: 48,
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 4,
        padding: 10
    },

})