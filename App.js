import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import reducerStore from './reducers';
import LoginForm from './components/LoginForm';
import HomeList from './components/HomeList';
import { Router, Stack, Scene } from 'react-native-router-flux';

class App extends Component {
    render() {
        return (
            <Provider store={reducerStore}>
                <View style={{ flex: 1 }}>
                    <Router>
                        <Stack key="root">
                            <Scene key="login" component={LoginForm} title="Instagram Clone"/>
                            <Scene key="showList" component={HomeList} title="Instagram List"/>
                        </Stack>
                    </Router>
                </View>
            </Provider>
        );
    }
}

export default App; 