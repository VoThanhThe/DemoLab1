import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, TouchableOpacity, Alert, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addNewAction, removeNewAction, updateNewAction } from "../redux/actions/NewAction"

const AddNews = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60");
    const navigation = useNavigation();
    const dispath = useDispatch();

    const Submit = () => {
        const result = {
            _id: Math.round(Math.random() * 1000) + "",
            title: title,
            content: content,
            image: image
        }
        console.log("Kết quả", result);
        dispath(addNewAction(result));
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
                    source={{ uri: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }} />
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

export default AddNews

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