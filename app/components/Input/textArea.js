import React, { Component } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView,Keyboard } from 'react-native';
import { Phone, ColorSettings } from "../../components";


export default class textArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <TextInput
                    style={[styles.container,this.props.textStyle]}
                    multiline={true}
                    editable={true}
                    returnKeyType='next'
                    onSubmitEditing={this.props.onSubmitEditing}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    placeholder={this.props.placeHolder}
                    placeholderTextColor={ColorSettings.colorGrayDark} 

                />
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        height: 100,
        textAlignVertical: 'top',
        paddingRight: 10,
        borderColor: "#000",
        borderWidth: 0.8,
        color: "#000"
    }
})
