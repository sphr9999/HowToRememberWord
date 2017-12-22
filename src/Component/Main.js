import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component {
    getWordList() {
        const { myFilter, myWords } = this.props;
        if (myFilter === 'SHOW_ALL') return myWords;
        if (myFilter === 'MEMORIZED') return myWords.filter(e => e.memorized);
        if (myFilter === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized);

    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Header />

                <View style={{ flex: 10 }}>
                    {this.props.myIsAdding?<Form />:null}
                    <FlatList
                        data={this.getWordList()}
                        renderItem={({ item }) => <Word myWords={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Filter />
            </View>

        )
    }
}

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding: state.isAdding,
    };
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
})

export default connect(mapStateToProps)(Main);

