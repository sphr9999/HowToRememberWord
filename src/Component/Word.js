import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleShow, toggleMemorized } from '../redux/actionCreators';

class Word extends Component {
    render() {

        const textDecorationLine = this.props.myWords.memorized ? 'line-through' : 'none';
        const memorizedButtonText = this.props.myWords.memorized ? 'forget' : 'memorized';
        const meaning = this.props.myWords.isShow ? this.props.myWords.vn : '------';
        return (
            <View style={styles.container}>
                <Text style={{ textDecorationLine }}>{this.props.myWords.en}</Text>
                <Text>{meaning}</Text>
                <View style={styles.controller}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.toggleMemorized(this.props.myWords.id)}
                    >
                        <Text>{memorizedButtonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.toggleShow(this.props.myWords.id)}
                    >
                        <Text>show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect(null, { toggleMemorized, toggleShow })(Word);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2DEF6',
        padding: 10,
        margin: 10
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#F5F5F5',
        margin: 5,
        padding: 5,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
})