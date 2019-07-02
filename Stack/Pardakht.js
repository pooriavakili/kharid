import React, {Component} from 'react';

import {
    View,
    Text,
    WebView
}from 'react-native'

export default class Pardakht extends Component {


    render() {
        return (
            <WebView
                source={{uri: 'https://docs.payping.ir/#tag/Payment'}}
                style={{marginTop:20}}

            />
        );
    }
}
