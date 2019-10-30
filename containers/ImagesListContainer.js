/**
 * @format
 * @flow
 */

import React from 'react';
import {ImagesListComponent} from "../components/imagesListComponent";
import {Button, ScrollView} from 'react-native';

class ImagesListContainer extends React.Component {
    static navigationOptions = {
        title: 'Gallery list',
    };
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")
            .then(response => response.json())
            .then(data => {
                this.setState({data})
            })
            .catch(err => console.log(err));
    }



    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <ImagesListComponent
                    data={this.state.data}
                    action={navigate}
                />
                <Button
                    title="Go to Profile"
                    onPress={() => navigate('ImageScreen')}
                />
            </ScrollView>
        );
    }

}


export default ImagesListContainer;
