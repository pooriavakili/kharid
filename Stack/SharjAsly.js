import React, {Component} from 'react';

import {
    View,
   TouchableWithoutFeedback,

    Text,
    Image,
    StyleSheet
}from 'react-native'

export default class SharjAsly extends Component {
    render() {
        return (
            <View>
                <View style={Style.Touch2}>
                <TouchableWithoutFeedback
                onPress={()=>{
                    this.props.navigation.navigate('irancell')
                }}

                >
                    <Image
                    source={require('./../img/irancell.jpg')}
                    style={Style.Irancell}
                    />
                </TouchableWithoutFeedback>
                    <Text style={Style.Text16}>ایرانسل</Text>
                </View>
                <View style={Style.Touch3}
                >
                <TouchableWithoutFeedback
                    onPress={()=>{
                        this.props.navigation.navigate('raytel')
                    }}

                >
                    <Image
                        source={require('./../img/raytel.png')}
                        style={Style.Irancell}
                    />
                </TouchableWithoutFeedback>
                <Text style={Style.Text16}>رایتل</Text>
                </View>
                <View style={Style.Touch4}
                >
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('hamrahAval')
                        }}

                    >
                        <Image
                            source={require('./../img/hamrahAval.jpg')}
                            style={Style.Irancell}
                        />
                    </TouchableWithoutFeedback>
                    <Text style={Style.Text16}>همراه اول</Text>
                </View>
            </View>

        );
    }
}
const Style=StyleSheet.create({
Irancell:{
width:50,
    height:50,
    left:350,
    top:10
},
    Touch2:{
    borderWidth: 1,
        borderColor:"black",
        borderStyle:"solid",
        top:70
    },
    Text16:{
        fontSize:20,
        fontWeight: "bold",
        color:"black",
        right:80,
        bottom:30
    },
    Touch3:{
    borderWidth:1,
    borderColor:"black",
        borderStyle: "solid",
        top:90

    },
    Touch4:{
        borderWidth:1,
        borderColor:"black",
        borderStyle: "solid",
        top:110
    }

})
