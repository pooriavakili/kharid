import React, {Component} from 'react';

import {View, Text, StyleSheet,TouchableWithoutFeedback} from 'react-native'
import {Header, Left} from "native-base";

import {Icon} from "react-native-elements";
import GhabezZarime from "./Stack/GhabezZarime";

export  default class home extends Component {

    render() {

        return (
            <View style={Style.container}>

                <Header style={Style.Header
                }>
                    <Left style={Style.Right}>

                        <Icon onPress={()=>
                            this.props.navigation.openDrawer()}
                              style={Style.Img}
                              name='menu'
                              color='white'
                        />



                    </Left>




                </Header>


                <View
                    style={Style.Touch2}
                >
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('khadamatPardatBanky')
                        }}

                    >

                        <Text style={Style.Text1}>خدمات پرداخت بانکی</Text>


                    </TouchableWithoutFeedback>
                </View>
                <View
                    style={Style.Touch3}
                >
                    <TouchableWithoutFeedback
                    onPress={()=>{
                        this.props.navigation.navigate('ghabezZarime')
                    }}




                    >

                        <Text style={Style.Text1}>قبض وجریمه</Text>


                    </TouchableWithoutFeedback>
                </View>
                <View
                    style={Style.Touch4}
                >
                    <TouchableWithoutFeedback

                        onPress={()=>{
                            this.props.navigation.navigate('sharjAsly')
                        }}
                    >

                        <Text style={Style.Text1}>خرید شارژ</Text>


                    </TouchableWithoutFeedback>
                </View>
                <View
                    style={Style.Touch5}
                >
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('kharidBasteEnternety')
                        }}

                    >

                        <Text style={Style.Text1}>خرید بسته اینترنتی</Text>


                    </TouchableWithoutFeedback>
                </View>


            </View>
        );
    }
}



const Style=StyleSheet.create({
    container:{
        flex:1
    },
    Header:{
        backgroundColor:'#03022c',
        top:-10

    },
    Right:{
        right:-210
    },
    Img:{
        height:60,
        width:60,


    },
    Text1:{

        fontSize:20,
        color:"#03022c"

    },
    Touch2:{
        top:70,
        left:-10
    },
    Touch3:{
        top:170,
        left:-260
    },
    Touch4:{
        top:140,
        left:-10
    },
    Touch5:{
        top:240,
        left:-220
    },


})
