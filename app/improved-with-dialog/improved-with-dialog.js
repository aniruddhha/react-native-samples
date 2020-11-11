import * as React from 'react';
import { useState, useRef } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, TextInput, Colors, Button, KeyboardAvoidingView } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import { Icon, Card } from 'react-native-elements'
import ReadMore from 'react-native-read-more-text';
import { Dialog } from 'react-native-simple-dialogs';
import Autocomplete from 'react-native-autocomplete-input';

export default function ImprovedUiDialogComponent() {

    const refRBSheet = useRef();
    const [dialogVisible, setDialogVisible] = useState(false)

    const data = [
        { name: 'android' },
        { name: 'bndroid' },
        { name: 'cndroid' },
        { name: 'android' },
        { name: 'bndroid' },
        { name: 'cndroid' },
        { name: 'android' },
        { name: 'bndroid' },
        { name: 'cndroid' },
        { name: 'android' },
        { name: 'bndroid' },
        { name: 'cndroid' },
    ];

    const _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: 'white', marginTop: 5 }} onPress={handlePress}>
                Read more
          </Text>
        );
    }

    const _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: 'white', marginTop: 5 }} onPress={handlePress}>
                Show less
          </Text>
        );
    }

    const _handleTextReady = () => {
        // ...
    }

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 100

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexGrow: 0.1, flexDirection: 'row', backgroundColor: 'red' }}>
                <View style={{ flex: 2 }}></View>
                <View style={{ flex: 9 }}>

                    <ReadMore
                        numberOfLines={3}
                        renderTruncatedFooter={_renderTruncatedFooter}
                        renderRevealedFooter={_renderRevealedFooter}
                        onReady={_handleTextReady}>
                        <Text style={{ fontSize: 11 }}>
                            You can also connect to the development server over Wi-Fi.
                            You can also connect to the development server over Wi-Fi.
                            You can also connect to the development server over Wi-Fi.
                            You can also connect to the development server over Wi-Fi.
                            You can also connect to the development server over Wi-Fi.
                             You can also connect to the development server over Wi-Fi.
                             You can also connect to the development server over Wi-Fi.
                             You can also connect to the development server over Wi-Fi.
                             You can also connect to the development server over Wi-Fi.
                             You can also connect to the development server over Wi-Fi.
                    </Text>
                    </ReadMore>
                </View>
            </View>
            <View style={{ flexGrow: 0.1, backgroundColor: 'yellow', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <View style={{ flex: 2 }}>
                    <Icon name="edit" size={20} color="blue" onPress={() => setDialogVisible(true)} style={{
                        justifyContent: "center"
                    }} />
                </View>
                <Text style={{ flex: 9 }} onPress={() => refRBSheet.current.open()}>
                    Ani, xyz, pqr,Ani, xyz, pqr,Ani,Ani, xyz, pqr,Ani, xyz, pqr,Ani,Ani, xyz, pqr,Ani, xyz, pqr,Ani,Ani, xyz, pqr,Ani, xyz, pqr,Ani,Ani, xyz, pqr,Ani, xyz, pqr,Ani,Ani, xyz, pqr,Ani, xyz, pqr,Ani,Ani, xyz, pqr,Ani, xyz, pqr,Ani,
                </Text>
            </View>
            <View style={{ flex: 7 }}>
                <FlatList
                    data={[
                        { key: 'Android' },
                        { key: 'iOS' },
                        { key: 'Java' },
                        { key: 'Swift' },
                        { key: 'adlsdfm' },
                        { key: '93t9386' },
                        { key: 'z,v' },
                        { key: '654654' },
                        { key: 'ambn27r7t' },
                        { key: '3219823r' },
                        { key: 'zx,xvnv87r' },
                        { key: 'q-r0sfnfn' },
                        { key: '981312' },
                        { key: '98131jlklj2' },
                    ]}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', border: 'red' }}>
                            <View
                                style={{
                                    height: 1,
                                    flex: 1,
                                    backgroundColor: '#C0C0C0',
                                    justifyContent: 'center',
                                    alignSelf: 'center'
                                }}
                            />
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                height: 35,
                                justifyContent: 'center',
                                alignContent: 'center',
                            }}>
                                <Text style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    fontStyle: 'italic',
                                    fontWeight: 'bold'
                                }}>Hi {item.key}</Text>

                                <Icon name="share" size={20} color="#A9A9A9" style={{
                                    flex: 1,
                                    justifyContent: "center"
                                }} />
                            </View>

                            <View
                                style={{
                                    height: 1,
                                    flex: 1,
                                    backgroundColor: '#C0C0C0',
                                    alignSelf: 'center'
                                }}
                            />
                        </View>
                    }
                />
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={500}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 3 }}>
                        <FlatList
                            data={[
                                { key: 'Android' },
                                { key: 'iOS' },
                                { key: 'Java' },
                                { key: 'Swift' },
                                { key: 'adlsdfm' },
                                { key: '93t9386' },
                                { key: 'z,v' },
                                { key: '654654' },
                                { key: 'ambn27r7t' },
                                { key: '3219823r' },
                                { key: 'zx,xvnv87r' },
                                { key: 'q-r0sfnfn' },
                                { key: '981312' },
                                { key: '98131jlklj2' },
                            ]}
                            renderItem={({ item }) =>
                                <Card>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Image
                                            style={{ flex: 2, height: 50 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
                                        />
                                        <Text style={{ flex: 9 }} >{item.key}</Text>
                                    </View>
                                </Card>
                            }
                        />
                    </View>
                    <View style={{ bottom: 0, width: '100%', backgroundColor: 'blue', position: 'absolute' }}>
                        <TextInput> HI </TextInput>
                    </View>
                </View>
            </RBSheet>

            <Dialog
                visible={dialogVisible}
                title="Custom Dialog"
                onTouchOutside={() => setDialogVisible(false)}
                dialogStyle={{ height: '60%' }}
                contentStyle={{ height: '100%' }}>
                <View>
                    <View style={{ width: '100%', height: '20%' }}>
                        <TextInput style={{ height: '100%' }}> Hi </TextInput>
                    </View>
                    <View style={{ width: '100%', height: '60%' }}>
                        {/* <Autocomplete
                                data={data}
                                defaultValue=''
                                renderItem={({ item }) => (
                                    <TouchableOpacity>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            /> */}


                        <FlatList
                            data={[
                                { key: 'Android' },
                                { key: 'iOS' },
                                { key: 'Java' },
                                { key: 'Swift' },
                                { key: 'adlsdfm' },
                                { key: '93t9386' },
                                { key: 'z,v' },
                                { key: '654654' },
                                { key: 'ambn27r7t' },
                                { key: '3219823r' },
                                { key: 'zx,xvnv87r' },
                                { key: 'q-r0sfnfn' },
                                { key: '981312' },
                                { key: '98131jlklj2' },
                            ]}
                            renderItem={({ item }) =>
                                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', border: 'red' }}>
                                    <Text style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        fontStyle: 'italic',
                                        fontWeight: 'bold'
                                    }}>Hi {item.key}</Text>
                                </View>
                            }
                        />
                    </View>
                    <View style={{ width: '100%', height: '10%' }}>
                        <Button title='Okay'></Button>
                    </View>
                </View>

            </Dialog>
        </SafeAreaView >
    );
}

        //1.53 to 2.11
