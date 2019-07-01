import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,

    Picker, Button
} from 'react-native'

export default class Taksy extends Component {
    state={
        ostan:"",
        maghsad:""
    }
    render() {
        return (
            <View
                style={Style.conntianer}
            >
                <View  style={Style.asly}>
                    <Text style={Style.Ostan}> استان مبدا</Text>
                    <Picker
                        selectedValue={this.state.ostan}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ostan: itemValue})
                        }



                    >
                        <Picker.Item value='تهران' label='تهران'/>
                        <Picker.Item value='البرز' label='البرز'/>
                        <Picker.Item value='گیلان' label='گیلان'/>
                        <Picker.Item value='سمنان' label='سمنان'/>
                        <Picker.Item value='رشت' label='رشت'/>
                        <Picker.Item value='تبریز' label='تبریز'/>
                        <Picker.Item value='ارومیه' label='ارومیه'/>
                        <Picker.Item value='مازندران' label='مازندران'/>
                        <Picker.Item value='کرمان ' label='کرمان'/>
                        <Picker.Item value='یزد' label='یزد'/>
                        <Picker.Item value='اصفهان' label='اصفهان'/>
                        <Picker.Item value='قزوین' label='قزوین'/>
                        <Picker.Item value='زنجان' label='زنجان'/>
                        <Picker.Item value='قم' label='قم'/>
                        <Picker.Item value='مرکزی' label='مرکزی'/>
                        <Picker.Item value='کرمانشاه' label='کرمانشاه'/>
                        <Picker.Item value='هرمزگان' label='هرمزگان'/>
                        <Picker.Item value='فارس' label='فارس'/>
                        <Picker.Item value='بوشهر' label='بوشهر'/>
                        <Picker.Item value='همدان' label='همدان'/>
                        <Picker.Item value='لرستان' label='لرستان'/>
                        <Picker.Item value='ایلام' label='ایلام'/>
                        <Picker.Item value='خراسان شمالی' label='خراسان شمالی'/>
                        <Picker.Item value='خراسان رضوی' label='خراسان رضوی'/>
                        <Picker.Item value='خراسان جنوبی' label='خراسان جنوبی'/>
                        <Picker.Item value='سیستان وبلوچستان' label='سیستان وبلوچستان'/>
                        <Picker.Item value='کهگلویه وبویراحمد' label='کهگلویه وبویراحمد'/>
                        <Picker.Item value='خوزستان' label='خوزستان'/>
                        <Picker.Item value='بوشهر' label='بوشهر'/>
                        <Picker.Item value='همدان' label='همدان'/>
                        <Picker.Item value='کردستان' label='کردستان'/>
                        <Picker.Item value='گلستان' label='گلستان'/>
                    </Picker>
                </View>
                <View style={Style.Maghsad}>
                    <Text style={Style.Text25}>استان مقصد</Text>
                    <Picker
                        selectedValue={this.state.maghsad}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ maghsad: itemValue})
                        }



                    >
                        <Picker.Item value='تهران' label='تهران'/>
                        <Picker.Item value='البرز' label='البرز'/>
                        <Picker.Item value='گیلان' label='گیلان'/>
                        <Picker.Item value='سمنان' label='سمنان'/>
                        <Picker.Item value='رشت' label='رشت'/>
                        <Picker.Item value='تبریز' label='تبریز'/>
                        <Picker.Item value='ارومیه' label='ارومیه'/>
                        <Picker.Item value='مازندران' label='مازندران'/>
                        <Picker.Item value='کرمان ' label='کرمان'/>
                        <Picker.Item value='یزد' label='یزد'/>
                        <Picker.Item value='اصفهان' label='اصفهان'/>
                        <Picker.Item value='قزوین' label='قزوین'/>
                        <Picker.Item value='زنجان' label='زنجان'/>
                        <Picker.Item value='قم' label='قم'/>
                        <Picker.Item value='مرکزی' label='مرکزی'/>
                        <Picker.Item value='کرمانشاه' label='کرمانشاه'/>
                        <Picker.Item value='هرمزگان' label='هرمزگان'/>
                        <Picker.Item value='فارس' label='فارس'/>
                        <Picker.Item value='بوشهر' label='بوشهر'/>
                        <Picker.Item value='همدان' label='همدان'/>
                        <Picker.Item value='لرستان' label='لرستان'/>
                        <Picker.Item value='ایلام' label='ایلام'/>
                        <Picker.Item value='خراسان شمالی' label='خراسان شمالی'/>
                        <Picker.Item value='خراسان رضوی' label='خراسان رضوی'/>
                        <Picker.Item value='خراسان جنوبی' label='خراسان جنوبی'/>
                        <Picker.Item value='سیستان وبلوچستان' label='سیستان وبلوچستان'/>
                        <Picker.Item value='کهگلویه وبویراحمد' label='کهگلویه وبویراحمد'/>
                        <Picker.Item value='خوزستان' label='خوزستان'/>
                        <Picker.Item value='بوشهر' label='بوشهر'/>
                        <Picker.Item value='همدان' label='همدان'/>
                        <Picker.Item value='کردستان' label='کردستان'/>
                        <Picker.Item value='گلستان' label='گلستان'/>
                    </Picker>
                </View>
                <View  style={Style.Pardakht6}>
                    <Button title='پرداخت'
                            style={Style.Par6}
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
    conntianer:{
        flex:1
    },
    asly:{
        top:200,
        right:100,

    },
    Ostan:{
        fontSize:20,
        color:"black",
        right:50
    },
    Maghsad:{
        top:300,
        right:100
    },
    Text25:{
        fontSize: 20,
        color:"black",
        right:50
    },
    Pardakht6:{
        marginRight:100,
        marginLeft:100,
        top:400,
        left:10
    },
    par6:{
        color:'#041d7e',
    }
})
