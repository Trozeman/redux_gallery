/**
 * @format
 * @flow
 */

import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CropStr = (str: string): string => {
    if (typeof str !== 'string') return false;
    if (str.length <= 15) return str;
    return str.slice(0, 15) + "..."
};


const ImageComponent = (props) => {
    return (
        <TouchableOpacity
            key={props.data.id}
            style={styles.imagesWrapper}
            onPress={() => props.action('ImageScreen', {id:props.data.urls.regular})}>
            <Image
                style={styles.image}
                source={{uri: props.data.urls.small}}
            />
            <Text style={styles.textImgName}>
                Image: {CropStr(props.data.description) || "No name"}
            </Text>
            <Text style={styles.textImgAuthor}>
                Author: {CropStr(props.data.user.first_name)} {props.data.user.last_name}
            </Text>
        </TouchableOpacity>
    )
};


export let ImagesListComponent = (props) => {
    if (props.data) {
        return (
            props.data.map(data => <ImageComponent key={data.id} action={props.action} data={data}/>)
        );
    }
    return (
        <View style={styles.imagesWrapper}>
            <Text style={styles.loadText}>Loading...</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    imagesWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2d423f",
        paddingBottom: 15
    },
    image: {
        marginTop: 15,
        borderRadius: 5,
        width: '95%',
        height: 150,
    },
    loadText: {
        fontSize: 45,
        textAlign: 'center',
        textAlignVertical: "center",
        backgroundColor: 'yellow',
    },
    textImgName: {
        color: "#fbfbfb",
        fontSize: 18,
    },
    textImgAuthor: {
        color: "#fbfbfb",
        fontSize: 16
    },
});
