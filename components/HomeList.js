import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { callWebService } from '../actions';

const postData = require('../reducers/IgDataList.json');

class HomeList extends Component {
    
    // componentWillMount () {
    //     this.state = {
    //         ds: new FlatList.DataSource({
    //             rowHasChanged: (r1, r2) => r1 != r2
    //         })
    //     }
    // }

    // componentDidMount() {
    //     console.log("here", this.state, this.props.data);
    //     if (this.props.data != null) {
    //         this.setState({
    //             ds: this.state.ds.cloneWithRows(this.props.data)
    //         });
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log("the state", nextProps.data)
    //     if (nextProps.data != null) {
    //         this.setState({
    //             ds: this.state.ds.cloneWithRows(nextProps.data)
    //         });
    //     }
    //     // if (nextProps.error != undefined) {
    //     //     alert('Error', nextProps.error, [{ 
    //     //         text: 'Do you want to reload? ', 
    //     //         onPress: () => this.props.callService() 
    //     //     }],
    //     //     { cancelable: false })
    //     // }
    // }
    
    renderItem(post) {
        console.log("each post", post)
        return <ListItem post={post}/>;
    }

    // componentHasReceivedProps() {
    //     console.log("the state", this.props.data)
    //     if (this.props.data != null) {
    //         this.setState({
    //             ds: this.state.ds.cloneWithRows(this.props.data)
    //         });
    //     }
    // }

    render() {
        // const { ds, isLoading } = this.state;
        console.log("the state", postData)
        return (
            <FlatList 
                data={postData}
                renderItem={this.renderItem}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.LibraryReducer.isLoading,
    error: state.LibraryReducer.error,
    data:  state.LibraryReducer.data
});

// const mapDispatchToProps = (dispatch) => ({
//     callService: () => dispatch(callWebService())
// })

export default connect(mapStateToProps)(HomeList);