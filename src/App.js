import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Main from './Component/Main';
import store from './redux/store';

class App extends Component {
    state = {}
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}



export default App;