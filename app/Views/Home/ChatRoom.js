import React, { Component } from 'react';
import { View, Text, StyleSheet, Keyboard, BackHandler, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Logo, H2, NoInternet, Avatar, ButtonLargeSecondary, H5, ColorSettings, InputTextArea, ButtonCircle, ModalBottomCustomeOrder, ModalLoading, APIErrorModal, BurgerMenuIcon, ButtonSmall } from "../../components";
import SectionList from 'react-native-tabs-section-list';
import Analytics from '../../components/Analytics/analyticsFirebase';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-community/async-storage";
import Functions from '../../components/Services/Functions';
import NetInfo from "@react-native-community/netinfo";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import firebaseSetup from "../Login/setup";

const { auth, firestore } = firebaseSetup();

export default class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sentTo: this.props.sentTo,
            from: global.globalUser,
            allChat: [],
            textInput:'',
        };
    }
    componentDidMount() {

        
        this.callAllChatHistory();

    }
    

    callAllChatHistory = async () => {
        let path = 'chatMessage/' + this.state.sentTo.uid + '/' + this.state.from.uid;
        let allChat = []
        firestore().collection(path).get().then((querySnapshot) => {
            querySnapshot.forEach(documentSnapshot => {
                let temp =documentSnapshot.data();
                
                
                allChat.push(temp);
                console.log('user ID: ', temp);

            })
            this.setState({
                allChat: allChat
            })

        });

    }

    renderMenu = () => {
        return (
            <View style={{ height: 50, backgroundColor: ColorSettings.colorPrimary, marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                <H2 textTitle="Bakers Chat App" textStyle={{ color: ColorSettings.colorWhite }} />
            </View>
        )
    }
    renderChatList = () => {
        return (

            <FlatList
                data={this.state.allChat}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <View style={{ marginTop: 5 }}>
                        {item.uid==this.state.from ?this.renderFromSent(item):this.renderToSent(item)}
                    </View>
                )}
            />

        )
    }

    onPressSent = () => {

    }

    renderFromSent = (item) => {
        return (
            <TouchableOpacity style={styles.itemContainer} >
                <Image style={[styles.RoundImage]} source={{ uri: this.state.sentTo.picture }} />
                <View>
                    <H5 textTitle={item.text} textStyle={styles.itemTitle} />
                </View>

            </TouchableOpacity>
        )
    }
    renderToSent = (item) => {
        return (
            <TouchableOpacity style={[{alignItems: "flex-end",justifyContent: "flex-end",flexDirection: "row",marginRight:10}]} >
                <View style={{marginRight:20}}>
                    <H5 textTitle={item.text} textStyle={styles.itemTitle} />
                </View>
                <Image style={[styles.RoundImage]} source={{ uri: this.state.sentTo.picture }} />

            </TouchableOpacity>
        )
    }

    onChangeTextInput=(e)=>{
        this.setState({
            textInput: e
        })
    }

    onPressSentButton=()=>{
        let path = 'chatMessage/' + this.state.sentTo.uid + '/' + this.state.from.uid;
        firestore().collection(path).add({
            text: this.state.textInput,
            createdAt: new Date(),
            uid: this.state.from.uid
        }).then(() => {
            console.log("Chat Details Added");
            this.setState({
                textInput: ""
            })
        })
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                {this.renderMenu()}
                {/* <View style={{ marginTop: 5 }}>
                    <TouchableOpacity style={styles.itemContainer} >
                        <Image style={[styles.RoundImage]} source={{ uri: this.state.sentTo.picture }} />
                        <View>
                            <H5 textTitle={this.state.sentTo.name} textStyle={styles.itemTitle} />
                        </View>

                    </TouchableOpacity>
                </View> */}
                {this.renderChatList()}

                <View style={{ justifyContent: "flex-end" }}>
                    <InputTextArea
                        onChangeText={(e) => this.onChangeTextInput(e)}
                        value={this.state.textInput}
                    />
                    <ButtonSmall
                        buttonTitle="Send"
                        onPressButtonSmall={() => console.log("Text",this.state.textInput)}
                        disabled={false}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    },
    RoundImage: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,
        height: 30,
        width: 30
    },

    itemContainer: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: ColorSettings.colorWhite,
        flexDirection: "row",
        width: "80%",
        borderRadius: 50
    },
    itemTitle: {
        marginLeft: 20,
        color: '#131313',
        textAlign: "center",
        marginTop: 5
    },

    itemDescription: {
        marginTop: 10,
        color: '#b6b6b6',
        marginLeft: 20,
    },
    itemRow: {
        flexDirection: 'row'
    },

});
