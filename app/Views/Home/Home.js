import React, { Component } from 'react';
import { View, Text, StyleSheet, Keyboard, BackHandler, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Logo, H2, NoInternet, Avatar, ButtonLargeSecondary, H5, ColorSettings, CardMenu, ButtonSmall, ModalBottomCustomeOrder, ModalLoading, APIErrorModal, BurgerMenuIcon } from "../../components";
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

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: this.props.uid,
            users: [],
            allUsers: [],
        };
    }

    componentDidMount() {
        this.getChatUsers();
    }

    getChatUsers = async () => {
        const users = await firestore().collection('chatUsers').doc(this.state.uid).get();
        let tempAllUser = [];
        this.setState({
            users: users._data
        })
        firestore()
            .collection('chatUsers')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    let tempData = {
                        uid: documentSnapshot.id,
                        name: documentSnapshot._data.name,
                        email: documentSnapshot._data.email,
                        picture: documentSnapshot._data.picture,
                    }
                    tempAllUser.push(tempData);
                    console.log('user ID: ', tempData);

                })
                console.log('All Users: ', tempAllUser);
                this.setState({
                    allUsers: tempAllUser
                })

            });

    }

    renderMenu=()=>{
        return(
            <View style={{height:50,backgroundColor: ColorSettings.colorPrimary,marginBottom:10,justifyContent: "center",alignItems: "center"}}>
                <H2 textTitle="Bakers Chat App" textStyle={{color:ColorSettings.colorWhite}} />
            </View>
        )
    }
    onPressUserCard=(index,userDetails)=>{
        console.log("Sent TO",userDetails)
        Actions.ChatRoom({sentTo: userDetails});
    }

    renderChatList = () => {
        return (
           
                <FlatList
                    data={this.state.allUsers}
                    keyExtractor={(item) => item.uid}
                    renderItem={({item, index}) => (
                        <View style={{marginTop:5}}>
                            <TouchableOpacity style={styles.itemContainer} onPress={()=>this.onPressUserCard(index,item)}>
                                <Image style={[styles.RoundImage]} source={{ uri: item.picture }} />
                                <View>
                                    <H2 textTitle={item.name} textStyle={styles.itemTitle} />
                                    <H5 textTitle={item.email} textStyle={styles.itemDescription} />
                                </View>

                            </TouchableOpacity>
                        </View>
                    )}
                />
           
        )
    }

    render() {
        console.log("State", this.state.users);
        return (
            <View style={styles.container}>
                {this.renderMenu()}
                {this.renderChatList()}

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
        height: 50,
        width: 50
    },

    itemContainer: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: ColorSettings.colorWhite,
        flexDirection: "row"
    },
    itemTitle: {
        marginLeft: 20,
        color: '#131313'
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