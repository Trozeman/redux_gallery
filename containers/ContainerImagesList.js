import React from 'react';
import {ImagesList} from "../components/imagesList";

class ContainerImagesList extends React.Component{

    constructor(props: Props) {
        super(props);
        this.state = {};
        fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")
            .then(response => response.json())
            .then(data => {
                this.setState({data})
            })
            .catch(err => console.log(err));
    }


    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <ImagesList
                data={this.state.data}
            />
        );
    }

}


export default ContainerImagesList;
