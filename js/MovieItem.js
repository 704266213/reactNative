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


class MovieItem extends PureComponent {

    constructor(props) {
        super(props);
    }

    onBuy = ({info}) => {
        Toast.show("名称：" + info.filmName, Toast.SHORT);
    }


    render() {
        let {info} = this.props
        return (
            <View style={styles.container}>

                <Image source={{uri: info.filmUrl}} style={styles.filmImage}/>

                <View style={styles.filmContainer}>
                    <Text style={styles.filmName}>{info.filmName}</Text>
                    <Text style={styles.filmText}>{info.releaseDate}</Text>
                    <Text numberOfLines={2} style={styles.filmText}>{info.filmActor}</Text>
                    <Text numberOfLines={1} style={styles.filmText}>{info.filmDesc}</Text>
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
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8
    },
    filmImage: {
        width: 80,
        height: 120,
        alignSelf: 'flex-start'
    },
    filmContainer: {
        alignSelf: 'flex-start',
        flex: 2,
        paddingLeft: 8,
        paddingRight: 8
    },
    filmName: {
        color: "#141823",
        fontSize: 20,
        textAlign: 'left',
    },
    filmText: {
        color: "#141823",
        fontSize: 14,
        textAlign: 'left',
        marginTop: 4
    },
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    }
});

module.exports = MovieItem;