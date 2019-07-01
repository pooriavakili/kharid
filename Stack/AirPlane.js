import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
}from 'react-native'

export default class AirPlane extends Component {
    render() {
        return (
            <View style={Style.CContainer}>
                <View style={Style.Shaher}>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate('shaher')
                }}

                >
                    <Text style={Style.Text21}>شهر</Text>
                </TouchableWithoutFeedback>
            </View>
                <View style={Style.keshvar}>
                    <TouchableWithoutFeedback
                    onPress={()=>{
                        this.props.navigation.navigate('keshvar')
                    }}
                    >
                        <Text style={Style.Text22}>کشور</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}
const Style=StyleSheet.create({
    CContainer:{
        flex:1
    },
    Shaher:{
        marginRight:150,
        marginLeft:150,
        top:200,
        borderWidth: 1,
        borderStyle:"solid",
        borderColor:"black",
        right:0
    },
    keshvar:{
        marginRight:150,
        marginLeft:150,
        top:300,
        borderWidth: 1,
        borderStyle:"solid",
        borderColor:"black",
        right: 0
    },
    Text21:{
        fontSize:20,
        color:"black",
        right:50
    },
    Text22:
        {
            fontSize:20,
            color:"black",
            right:50
        }

})
