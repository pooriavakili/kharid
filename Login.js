import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
} from 'react-native'
import React,{Component} from 'react'
import {Form} from 'native-base'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"لطفا ایمیل را درست بزنید",
            password:"لطفا پسورد را درست بزنید"
        }
    }

    render(){
        const {email}=this.state;
        const {password}=this.state;
        return(
            <View style={Style.Container}>
                <View style={Style.Text}>
                    <Form>
                        <View
                            style={{
                                left:50,
                                top:-100,

                            }}
                        >

                            <TextInput placeholder='ایمیل'
                                       placeholderTextColor="red"/>
                            <Text
                                style={{
                                    fontSize:20,
                                    color:"black",
                                    fontWeight: "bold",
                                    right:10,
                                    bottom:90,
                                }}
                            >ایمیل</Text>
                            <Text style={{
                                fontSize:17,
                                right:10,
                                bottom:25,
                                color:"red"
                            }}>{email}</Text>
                        </View>
                        <View
                            style={{
                                left:50,
                                top:50,

                            }}
                        >

                            <TextInput placeholder='پسورد'
                                       placeholderTextColor="red"
                                       secureTextEntry={true}


                            />
                            <Text
                                style={{
                                    fontSize:20,
                                    color:"black",
                                    fontWeight: "bold",
                                    right:10,
                                    bottom:90,
                                }}
                            >پسورد</Text>
                            <Text
                                style={{
                                    fontSize:17,
                                    right:10,
                                    bottom:30,
                                    color:"red"
                                }}
                            >{password}</Text>
                            <View  style={{    marginRight:100,
                                marginLeft:100,
                                top:100,
                                right:50}}>
                                <Button title='ورود'
                                        style={{ color:'#041d7e',}}
                                        onPress={()=>{
                                            this.props.navigation.navigate('home')
                                        }}
                                />
                            </View>

                        </View>


                    </Form>
                </View>
            </View>
        )
    }
}
const Style=StyleSheet.create({
    Container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",

    },


})
