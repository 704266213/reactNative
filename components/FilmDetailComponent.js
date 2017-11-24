import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

const {height} = Dimensions.get('window');

export default class FilmDetailComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {

        return (<View style={styles.container}>
                <View style={styles.toolbar}>
                    <Image
                        source={require('../images/toolbar_back.png')}
                        style={styles.back}
                    />
                    <Text style={styles.title}>影院详情</Text>
                </View>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#F4F4F4",
        alignItems: 'center'
    },
    title: {
        color: "#9E9E9E",
        fontSize: 18,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10
    }

})