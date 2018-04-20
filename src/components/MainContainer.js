import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../utils/Colors';

export default class MainContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.flatten({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.GREEN_DARK,
    }
});