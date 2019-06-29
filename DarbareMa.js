import React, { PureComponent } from 'react';
import { Dimensions,Text,  StyleSheet, View } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

export default class App extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <SwiperFlatList
                    autoplayDelay={2}
                    autoplayLoop
                    index={2}
                    showPagination
                >
                    <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                        <Text style={styles.text}>همه پرداخت ها با این اپ میتوانید انجام بدهید</Text>
                    </View>
                    <View style={[styles.child, { backgroundColor: 'thistle' }]}>
                        <Text style={styles.text}>بهترین دوست و بهترین همکار شما</Text>
                    </View>
                    <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                        <Text style={styles.text}>خیالتان از پرداخت راحت</Text>
                    </View>

                </SwiperFlatList>
            </View>
        );
    }
}
export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    child: {
        top:170,
        height: height * 0.5,
        width,
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
});
