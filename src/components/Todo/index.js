import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import Moment from 'moment'
import Colors from '../../utils/Colors';

export default class ToDo extends Component {

    constructor (props) {
        super(props)
    }
    
    onToggleComplete = () => {
        this.props.doc.ref.update({
            complete: !this.props.complete
        })
    }

    render() {
        return (
           <TouchableHighlight style={{padding: 8}} underlayColor={'#dfe6e9'} onPress={this.onToggleComplete}>
             <View style={styles.container}>
                <View style={{flex: 8}}>
                    <Text style={{fontWeight: '700', color: 'white'}}>{this.props.title}</Text>
                    <Text style={{color: Colors.GRAY_LIGHT}}>{Moment(this.props.createdTime).format('YYYY-MM-DD HH:mm')}</Text>
                </View>

                <View style={{flex: 4, alignItems: 'flex-end'}}>
                    {this.props.complete} && (<Text style={{color: Colors.WHITE}}>Completed</Text>)
                </View>
             </View>
           </TouchableHighlight>
        );
    }
}