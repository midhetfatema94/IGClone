import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callWebService, tokenChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import { Text } from 'react-native';

class LoginForm extends Component {
    
    componentWillMount () {
    }

    startIgOauth() {
        const { accessToken } = this.state;
        console.log("access token", accessToken);
        this.props.callService(accessToken)
    }

    accessTokenCreated(text) {
        this.setState({ accessToken: text })
        this.props.accessTokenChanged(text)
    }

    render() {
        console.log("here", this.state);
        return (
            <Card>
                <CardSection>
                    <Text>
                        Please get your access token and enter it in the box below. 
                        You can get your OAuth access token for instagram from http://instagram.pixelunion.net/
                    </Text>
                </CardSection>
                <CardSection>
                    <Input 
                        label = ""
                        placeholder="Instagram Access Token"
                        onChangeText={this.accessTokenCreated.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.startIgOauth.bind(this)}>
                        Login from Instagram
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.LibraryReducer.isLoading,
    error: state.LibraryReducer.error,
    data:  state.LibraryReducer.data,
    accessToken: state.LibraryReducer.accessToken
});

const mapDispatchToProps = (dispatch) => ({
    callService: (token) => dispatch(callWebService(token)),
    accessTokenChanged: (text) => dispatch(tokenChanged(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);