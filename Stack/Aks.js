import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image
}from 'react-native'

export default class Aks extends Component {
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.navigate('home')
        },2000)
    }

    render() {
        return (

<View style={Style.Asly}>
    <Image source={require('./../img/pardakht.png')}
    style={Style.img2}

    />

</View>
        );
    }
}
const Style=StyleSheet.create({
    container:{

    top:240,
        left:80

    },


    Asly:{

        top:300,
        left:100
    },
    img2:{
        width:200,
        height: 200
    }

})

