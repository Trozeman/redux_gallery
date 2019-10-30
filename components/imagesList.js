// @flow
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export let ImagesList = (props) => {
    if (props.data) {
        const images: Array = props.data.map( image => (
                <Image
                    key={image.id}
                    style={styles.image}
                    source={{uri: image.urls.small}}
                />
            )
        );
        return (
            <View style={styles.imagesWrapper}>
                {images}
            </View>
        );
    }
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    imagesWrapper:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
    },
    image:{
        marginTop: 15,
        borderRadius: 5,
        width: '95%',
        height: 200
    }
});
