import React, {Component} from 'react';

import {
    View,
    Text, Button,
    TextInput,
    StyleSheet
} from 'react-native'

export default class HamrahAval1 extends Component {
    state={
        sharj:"",
        number:""
    }
    render() {
        return (
            <View>
                <Text
                    style={Style.Text3}
                >مبلغ دلخواه</Text>
                <TextInput onChangeText={(text)=>{
                    this.setState({number:text})

                }}
                           value={this.state.number}
                           style={Style.Text6}
                />
                <View  style={Style.Pardakht5}>
                    <Button title='پرداخت'
                            style={Style.Par5}
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
    Par5:{
        color:'#041d7e',
    },
    Pardakht5:{
        marginRight:100,
        marginLeft:100,
        top:330,
        left:10
    },
    Text3:{
        color:'black',
        top:250,
        right:160
    },
    Text6:{
        top:250
    },
})
