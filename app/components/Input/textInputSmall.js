import React, { Component } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Phone, ColorSettings } from "../../components";

export default class textInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    leftIconView = () => {
        return (
            <View style={styles.leftIcon} >
                {this.props.leftIcon}
            </View >
        )
    }
    rightIconView = () => {
        return (
            <View style={styles.rightIcon} >
                {this.props.rightIcon}
            </View >
        )
    }



    render() {
        return (
            <KeyboardAvoidingView behavior="height" style={[styles.input, { borderColor: this.props.hasError ? ColorSettings.colorRed : ColorSettings.colorPrimary }]}>
                
                    {this.props.leftIcon ? this.leftIconView() : null}
                    <View>
                        <TextInput
                            onChangeText={this.props.onChange}
                            value={this.props.value}
                            placeholder={this.props.placeHolder}
                            maxLength={this.props.maxLength}
                            keyboardType={typeof this.props.keyboardType != "undefined" ? this.props.keyboardType : "default"}
                            autoFocus={this.props.autoFocus}
                            onBlur={this.props.onBlur}
                            onFocus={this.props.onFocus}
                            onEndEditing={this.props.onEndEditing}
                            onPressOut={this.props.onPressIn}
                            style={styles.inputText}
                            returnKeyType="done"
                            placeholderTextColor={ColorSettings.colorGrayDark} 
                        />

                    </View>
                    {this.props.rightIcon ? this.rightIconView() : null}
               
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    input: {
        marginHorizontal: 10,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 40,
        includeFontPadding: false,
        textAlignVertical: 'center',
        borderRadius:10,
        backgroundColor: "#E9EAEE"
        

    },
    leftIcon: {
        marginRight: 10, marginLeft: 5, marginTop: 8
    },
    rightIcon: {
        marginLeft: "auto", marginRight: 20, marginTop: 8
    },
    inputText: {
        flex: 1,
        color:"#000",
    }
});