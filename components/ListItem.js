import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, View, LayoutAnimation, Image } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { caption } = this.props.post.item;
        var description = "No caption"
        
        if (caption != null) {
            description = caption.text
        }

        return (
            <CardSection>
                <Text  style={{ flex: 1 }}>
                    {description}
                </Text>
            </CardSection>
        );
    }
    
    renderLocation() {
        const { location } = this.props.post.item;
        var locationTitle = "No location"

        if (location != null) {
            locationTitle = location.name
        }

        return (
            <Text style={styles.locationStyle}>
                {locationTitle}
            </Text>
        );
    }

    render() {
        const { titleStyle, thumbnailStyle, picturePostStyle, headerStyle } = styles;
        const { user, images } = this.props.post.item;
        
        console.log('items', this.props.post.item.user);

        return (
            <View style={headerStyle}>
                <CardSection>
                    <Image source={{uri:user.profile_picture}} style={thumbnailStyle}/>
                    <View style={{flex: 1}}>
                        <Text style={titleStyle}>
                            {user.username}
                        </Text>
                        {this.renderLocation()}
                    </View>
                </CardSection>
                <CardSection>
                    <Image 
                        source={{ uri: images.standard_resolution.url }}
                        style={picturePostStyle}
                    />
                </CardSection>
                {this.renderDescription()}
            </View>
        );
    }
}

const styles = {
    headerStyle: {
        marginTop: 25, 
        borderTopWidth: 1, 
        borderColor: '#ddd'
    },
    titleStyle: {
        fontSize: 12,
        paddingLeft: 15,
        fontWeight: '600',
        paddingTop: 5
    },
    locationStyle: {
        paddingLeft: 15,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    picturePostStyle: {
        height: 300,
        width: null,
        flex: 1,
        flexWrap: 'wrap',
        resizeMode: 'cover'
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actions)(ListItem);