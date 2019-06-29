import React, {Component} from 'react';

import {
    View,
    TextInput,
    StyleSheet,
    Text, Button
} from 'react-native'

export default class GhabezZarime extends Component {
    render() {
        return (
            <View  style={{flex:1}}>
                <View  style={Style.Text17}>
               <Text style={Style.Text19}>شناسه قبض</Text>
                <TextInput/>
                </View>
                <View  style={Style.Text18}>
                    <Text style={Style.Text20}>شناسه پرداخت</Text>
                    <TextInput/>
                </View>
                <View  style={Style.Pardakht2}>
                    <Button title='پرداخت'
                            style={Style.Par}
                            onPress={()=>{
                                this.props.navigation.navigate('pardakht')
                            }}
                    />
                </View>
            </View>
        );
    }
}
const Style=StyleSheet.create({
    Text17:{
        top:200
    },
    Text18:{
        top:300
    },
    Text19:{
        fontSize:20,
        color:"black",
        right:150
    },
    Text20:{
        fontSize:20,
        color:"black",
        right:150
    },
    Pardakht2:{
        marginRight:100,
        marginLeft:100,
        top:400,
        left:10
    }
})
