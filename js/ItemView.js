'use strict';

import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import Toast from './Toast';

const {width, height} = Dimensions.get('window');


class ItemView extends PureComponent {

    constructor(props) {
        super(props);
    }

    onBuy = ({info}) => {
        Toast.show("名称：" + info.fruits + "   价格：" + info.price, Toast.SHORT);
    }


    render() {
        let {info} = this.props
        return (
            <View style={styles.container} >
                <View style={{alignSelf: 'center'}}>
                    <Text>{info.fruits}</Text>
                    <Text>{info.price}</Text>
                </View>

                <Button
                    style={{alignSelf: 'center'}}
                    onPress={() => this.onBuy({info})}
                    title="购买"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 80,
        width: width,
        paddingLeft: 16,
        paddingRight: 16
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

module.exports = ItemView;