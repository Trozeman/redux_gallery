import React from 'react';
import {
    Button,
    ScrollView,
    Image
} from 'react-native';
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {navigate} = this.props.navigation;
        console.log(this.props.navigation.getParam('id'));
        return (
            <ScrollView>
                <Image
                    style={{width: "100%", height:500}}
                    source={{uri: this.props.navigation.getParam('id')}}
                />
            </ScrollView>
        );
    }
}

export default HomeScreen;
