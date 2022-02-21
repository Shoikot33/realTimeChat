import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";

import { H5,ColorSettings as Settings,H2 } from "../";
import { buttonStyles } from "./styles";

let timerId;
class ButtonLarge extends Component {
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
           <View style={[buttonStyles.buttonView ,{opacity: this.props.disableOpacityChange == true ? this.activeOpacity : this.state.opacity }]}>
                <TouchableOpacity
                    activeOpacity={this.activeOpacity}
                    disabled={this.props.disabled || this.props.disableOpacityChange || this.state.buttonPressed}
                    onPressIn={() => {
                        if(typeof this.props.onPressInButtonLarge !== "undefined") {
                            this.props.onPressInButtonLarge();
                            this.disableButton();
                        }
                    }}
                    onPress={() => {
                        if(typeof this.props.onPressButtonLarge !== "undefined") {
                            this.props.onPressButtonLarge();
                            this.disableButton();
                        }
                    }}
                    style={[
                        buttonStyles.buttonLargeContainer,
                        this.props.buttonStyle,
                        this.props.disabled ? buttonStyles.buttonDisabled : "",
                    ]}
                >
                    {this.props.iconLeft ? (
                        <View style={{ paddingLeft: 10 }}>
                            {this.props.iconLeft}
                        </View>
                    ) : null}
                    <H2
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

class ButtonLargePrimary extends ButtonLarge {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ButtonLarge
                disableOpacityChange= {this.props.disableOpacityChange}
                iconLeft={this.props.iconLeft}
                iconRight={this.props.iconRight}
                disabled={
                    this.props.disabled
                        ? this.props.disabled
                        : this.state.buttonPressed
                }
                buttonStyle={[
                    buttonStyles.buttonPrimary,
                    this.props.buttonStyle,
                    this.props.disabled ? buttonStyles.buttonDisabled : "",
                ]}
                onPressButtonLarge={this.props.onPressButtonLargePrimary}
                onPressInButtonLarge={this.props.onPressInButtonLargePrimary}
                buttonTitle={this.props.buttonTitle}
                buttonTextStyle={[
                    buttonStyles.buttonTextLight,
                    this.props.buttonTextStyle,
                    this.props.disabled ? buttonStyles.buttonDisabledText : "",
                ]}
                activeOpacity={0.7}
            />
        );
    }
}

class ButtonLargeSecondary extends ButtonLarge {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ButtonLarge
                disableOpacityChange= {this.props.disableOpacityChange}
                iconLeft={this.props.iconLeft}
                iconRight={this.props.iconRight}
                disabled={
                    this.props.disabled
                        ? this.props.disabled
                        : this.state.buttonPressed
                }
                buttonStyle={[
                    buttonStyles.buttonSecondary,
                    this.props.buttonStyle,
                    this.props.disabled ? buttonStyles.buttonDisabled : "",
                ]}
                onPressButtonLarge={this.props.onPressButtonLargeSecondary}
                onPressInButtonLarge={this.props.onPressInButtonLargeSecondary}
                buttonTitle={this.props.buttonTitle}
                buttonTextStyle={[
                    buttonStyles.buttonSecondaryText,
                    this.props.buttonTextStyle,
                    this.props.disabled ? buttonStyles.buttonDisabledText : "",
                ]}
                activeOpacity={0.5}
            />
        );
    }
}

export { ButtonLarge, ButtonLargePrimary, ButtonLargeSecondary };
