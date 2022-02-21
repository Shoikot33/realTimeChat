import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { H2, ColorSettings as Settings, H5, AddCircle, RemoveCircle, InputTextSmall,H4 } from "../index";


export default class CardMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        return (
            <View style={[cardStyle.container,{elevation:this.props.elevation?elevation: 4}]}>
                <View style={cardStyle.textTitleContainer}>
                    <View style={{width:this.props.titleSize>19?"80%": "100%"}}>
                        <H2 textTitle={this.props.title} textStyle={cardStyle.boldText} />
                    </View>

                    <View style={{ marginTop: 20,marginBottom:10 }}>
                        <H5 textTitle={this.props.price} />
                    </View>

                </View>

                <View style={cardStyle.rightContainer}>

                    <View style={{ flexDirection: "row",marginTop:20 }}>
                        <TouchableOpacity style={{marginTop: 8}} onPress={this.props.onPressRemove}>
                            <RemoveCircle width={30} height={30} />
                        </TouchableOpacity>
                        <View >
                            <InputTextSmall
                                onChange={this.props.onChange}
                                placeHolder={this.props.placeHolder}
                                value={this.props.value}
                                keyboardType="numeric"
                                hasError={false}
                                maxLength={4}
                                autoFocus={this.props.autoFocus}
                                onBlur={this.props.onBlur}
                                onFocus={this.props.onFocus}
                                onEndEditing={this.props.onEndEditing}
                                onPressOut={this.props.onPressIn}
                            />
                        </View>
                        <TouchableOpacity style={{marginTop: 8}} onPress={this.props.onPressAdd}>
                            <AddCircle width={30} height={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:30}}>
                        <H4 textTitle={this.props.totalPrice} textStyle={cardStyle.boldText} />
                    </View>
                </View>

            </View>
        );
    }
}

const cardStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        minHeight: 108,
        borderRadius: 2,
        backgroundColor: Settings.colorWhite,
    },
    textTitleContainer: {
        marginTop: 18,
        marginLeft: 17
    },
    boldText: {
        fontWeight: "bold",
    },
    rightContainer: {
        marginLeft: "auto",
        marginRight: 15
    }

})
