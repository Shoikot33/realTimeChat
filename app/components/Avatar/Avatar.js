import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, DeviceEventEmitter } from 'react-native';

import {ColorSettings as Settings} from '../index';

export default class Avatar extends Component {

    constructor(props) {
        super(props);
        this.state = { error: false };
    }

 
    render() {
        console.log("Icons",this.props.iconSource);
        return (
            <View style={[styles.RoundImage, { backgroundColor: !this.state.error ? Settings.colorGrayLighter : Settings.colorWhite }, this.props.Size]}>
                <Image style={[styles.RoundImage, this.props.Size]} source={{ uri: this.props.iconSource }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    RoundImage: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,
    },
});
