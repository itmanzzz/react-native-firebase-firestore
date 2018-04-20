import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity
} from 'react-native';
import MainContainer from '../../components/MainContainer';
import ToDo from '../../components/Todo'
import styles from './styles';
import firebase from 'react-native-firebase';
import Colors from '../../utils/Colors';

export default class ToDoScreen extends Component {

    constructor (props) {
        super(props)
        this.ref = firebase.firestore().collection('Todos');
        this.unsubscribe = null
        this.state = {
            textInput: '',
            loading: true,
            todos: [],
        }
    }

    onCollectionUpdate = (querySnapshot) => {
        const todos = []
        querySnapshot.forEach((doc) => {
            const {title, complete, createdTime} = doc.data()
            todos.push({
                key: doc.id,
                doc,
                title,
                complete,
                createdTime: createdTime
            })
        })

        this.setState({
            todos: todos.sort((x,y) => {
                var valueX = x.createdTime
                var valueY = y.createdTime
                if (valueX < valueY) {
                    return -1
                }

                if (valueX > valueY) {
                    return 1
                }

                return 0
            }),
            loading: false
        })
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    onAddTodo = () => {
        this.ref.add({
            title: this.state.textInput,
            complete: false,
            createdTime: new Date()
        })
        this.setState({
            textInput: ''
        })
    }
    

    render() {
        // if (this.state.loading) {
        //     return null;
        // }
        return (
            <MainContainer>
                <View style={{height: 32}}/>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>FireStore Example</Text>
                    <Text style={{fontSize: 16, fontWeight: '500', color: 'white'}}>ToDo List</Text>
                </View>

                <View style={{height: 16}}/>

                <ScrollView style={{width: '100%'}}>
                  <View style={{height: 16}}/>

                 <FlatList 
                    data={this.state.todos}
                    renderItem={({item}) => (<ToDo {...item}/>)}/>
                </ScrollView>

                <View style={{height: 24}}/>
                
                <KeyboardAvoidingView  style={styles.keyboardContainer} behavior='padding'>
                    <View style={styles.textInputContainer}>
                        <TextInput style={{height: 48}}
                            underlineColorAndroid={'transparent'}
                            placeholder={'Leave todo content...'}
                            value={this.state.textInput}
                            onChangeText={(text) => this.setState({textInput: text})}
                            onSubmitEditing={this.onAddTodo}
                        />
                    </View>

                     <View style={{height: 12}}/>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            disabled={!this.state.textInput.length}
                            onPress={this.onAddTodo}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Save</Text>
                                </View>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
            </MainContainer>
        );
    }
}