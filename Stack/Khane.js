import React, {Component} from 'react';

import {
    View,
    Text,
    WebView
}from 'react-native'

export default class Khane extends Component {


    render() {
        return (
            <WebView
                source={{uri: 'https://address.ir/'}}
                style={{marginTop:20}}

            />
        );
    }
}
