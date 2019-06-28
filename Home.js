import React, {Component} from 'react';

import {ScrollView,ImageBackground,View, Text, StyleSheet,TouchableWithoutFeedback} from 'react-native'
import {Header, Left} from "native-base";

import {Icon} from "react-native-elements";


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



                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('bus')
                        }}

                    >
                        <ImageBackground style={Style.Img4} source={require('./img/bus.jpg')}>

                        <Text style={Style.Text5}>بلیط اتوبوس</Text>
                        </ImageBackground>

                    </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={()=>{
                        this.props.navigation.navigate('taksy')
                    }}
                >

                    <ImageBackground
                    source={require('./img/taksy.jpg')}
                    style={Style.img9}
                    >
                        <Text style={Style.Text11}>بلیط تاکسی </Text>
                    </ImageBackground>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={()=>{
                        this.props.navigation.navigate('airPlane')
                    }}

                >
                    <ImageBackground style={Style.img10} source={require('./img/havapeyma.jpg')}>
                        <Text style={Style.Text12}>بلیط هواپیما</Text>
                    </ImageBackground>
                </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                    onPress={()=>{
                        this.props.navigation.navigate('ghabezZarime')
                    }}




                    >
                        <ImageBackground style={Style.img6} source={require('./img/ghabez.jpg')}>
                        <Text style={Style.Text7}>قبض وجریمه</Text>
                        </ImageBackground>

                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback

                        onPress={()=>{
                            this.props.navigation.navigate('sharjAsly')
                        }}
                    >
                       <ImageBackground style={Style.img7} source={require('./img/sharj.png')}>
                        <Text style={Style.Text8}>خرید شارژ</Text>
                       </ImageBackground>

                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.navigation.navigate('kharidBasteEnternety')
                        }}

                    >
                        <ImageBackground style={Style.img8} source={require('./img/baste.png')}>

                        <Text style={Style.Text9}>خرید بسته اینترنتی</Text>
                        </ImageBackground>

                    </TouchableWithoutFeedback>

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
    img10:{
      width:80,
      height:80,
        top:-100,
        left:320
    },

    Right:{
        right:-210
    },
    img9:{
        width:80,
        height:80,

        top:-30,
        left:160
    },
    Text12:{
       fontSize:20,
       color:"black",
       width:"130%",
        top:90,
        right:30
    },
    Img:{
        height:60,
        width:60,


    },
    Text11:{
      fontSize:20,
      color:"black",
      width:"130%",
      top:90,
      right:10
    },
    Text1:{

        fontSize:20,
        color:"#03022c"

    },


    Img4:{
        width:80,
        height: 80,
        top:50,
        left:10
    },
    Text5:{
        right:20,
        top:90,
        fontSize:20,
        color:'black',
        width:'150%',
        direction:"rtl"
    },
    img6:{
        top:-20,
        width:80,
        height:80,
        left:180
    },
    Text7:{
        top:80,
        right:20,
        fontSize:20,
        width:'130%',
        color:"black",
        direction:'rtl'
    },

    img7:{
        left:20,
        width:80,
        height:80,
        top:-100
    },
    Text8:{
        fontSize:20,
        color:"black",
        width:'130%',
        direction:"rtl",
        top:100,
        right:30
    },
    img8:{
        left:320,
        width:80,
        height:80,
        top:-180

    },
    Text9:{
fontSize:20,
        color:"black",
        width:'130%',
        direction:"rtl",
        top:80,
        right:20
    }

})
