import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";

import { H4, ColorSettings as Settings, H2 } from "../index";


let timerId;
class ButtonSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonPressed: false,
            opacity: 1,
        };
        this.disableButton = this.disableButton.bind(this);
        this.activeOpacity = this.props.activeOpacity ? this.props.activeOpacity : 0.7;
    }

    disableButton() {
        this.setState({
            buttonPressed: true,
            opacity: this.activeOpacity,
        });
        timerId = setTimeout(() => {
            this.setState({
                buttonPressed: false,
                opacity: 1,
            });
        }, 1000);
    }

    componentWillUnmount() {
        if (typeof timerId !== "undefined") clearTimeout(timerId);
    }

    render() {
        return (
            <View style={[buttonStyles.buttonView, { opacity: this.props.disableOpacityChange == true ? this.activeOpacity : this.state.opacity }]}>
                <TouchableOpacity
                    activeOpacity={this.activeOpacity}
                    disabled={this.props.disabled || this.props.disableOpacityChange || this.state.buttonPressed}
                    onPressIn={() => {
                        if (typeof this.props.onPressInButtonSmall !== "undefined") {
                            this.props.onPressInButtonSmall();
                            this.disableButton();
                        }
                    }}
                    onPress={() => {
                        if (typeof this.props.onPressButtonSmall !== "undefined") {
                            this.props.onPressButtonSmall();
                            this.disableButton();
                        }
                    }}
                    style={[
                        buttonStyles.buttonSmallContainer,
                        this.props.buttonStyle,
                        this.props.disabled ? buttonStyles.buttonDisabled : "",

                    ]}
                >
                    {this.props.iconLeft ? (
                        <View style={{ paddingLeft: 10 }}>
                            {this.props.iconLeft}
                        </View>
                    ) : null}
                    <H4
                        textStyle={[
                            buttonStyles.buttonLargeText,
                            this.props.buttonTextStyle,
                            this.props.disabled
                                ? buttonStyles.buttonDisabledText
                                : "",
                        ]}
                        textTitle={this.props.buttonTitle}
                        numberOfLines={1}
                    />
                    {this.props.iconRight}
                </TouchableOpacity>
            </View>
        );
    }
}

var buttonStyles = StyleSheet.create({
    buttonView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonSmallContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Settings.colorTheme,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 4,
        width: '60%',
        minHeight: 45,

    },
    buttonLargeText: {
        paddingLeft: 15,
        paddingRight: 15,
        lineHeight: 24,
        color: Settings.colorWhite,
        fontWeight: "normal"
    },

});


export {
    ButtonSmall
}