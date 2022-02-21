import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';

import {ArrowRightWhite } from '../';
import {buttonStyles} from './styles';

let timerId;
class ButtonCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonPressed: false,
            opacity: 1
        };
        this.disableButton = this.disableButton.bind(this);
        this.activeOpacity = this.props.activeOpacity ? this.props.activeOpacity : 0.7;
    }

    disableButton() {
        this.setState({
            buttonPressed: true,
            opacity: this.activeOpacity
        });
        timerId = setTimeout(() => {
            this.setState({
                buttonPressed: false,
                opacity: 1
            });
        }, 1000);
    }

    componentWillUnmount() {
        if(typeof timerId !== "undefined") clearTimeout(timerId);
    }

    render() {
        return(
            <View
                style={[buttonStyles.buttonCircleView,{
                    opacity: this.props.disableOpacityChange ? this.activeOpacity : this.state.opacity,
                    elevation: this.props.elevation? this.props.elevation: 0,
                }]}
            >
                <TouchableOpacity
                    activeOpacity={this.activeOpacity}
                    disabled={this.props.disabled || this.props.disableOpacityChange || this.buttonPressed}
                    onPress={() => {
                        this.props.onPressButtonCircle();
                        this.disableButton();
                    }}
                    style={[buttonStyles.buttonCircleContainer, this.props.buttonStyle, this.props.disabled ? buttonStyles.buttonDisabled : '']}>
                        {this.props.iconButtonCircle ? this.props.iconButtonCircle : <ArrowRightWhite width={34} height={34} />}
                </TouchableOpacity>
            </View>
        )
    }
}

class ButtonCirclePrimary extends ButtonCircle {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<ButtonCircle
                activeOpacity={0.7}
			    disableOpacityChange= {this.props.disableOpacityChange}
                iconButtonCircle={this.props.iconButtonCircle}
                elevation = {this.props.elevation}
				disabled={this.props.disabled ? this.props.disabled : this.state.buttonPressed}
				buttonStyle = {[buttonStyles.buttonPrimary, this.props.buttonStyle, this.props.disabled ? buttonStyles.buttonDisabled : '']}
				onPressButtonCircle = {this.props.onPressButtonCirclePrimary}
            />
		)
	}
}

export {
	ButtonCircle, ButtonCirclePrimary
}