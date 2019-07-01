import React, {Component} from 'react';

import {
    View,
    Text,
    WebView
}from 'react-native'

export default class Hotel extends Component {


    render() {
        return (
            <WebView
                source={{uri: 'https://www.jabama.com/'}}
                style={{marginTop:20}}

            />
        );
    }
}
