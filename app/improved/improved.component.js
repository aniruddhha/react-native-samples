import * as React from 'react';
import { useState, useRef } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import { Icon, Card } from 'react-native-elements'

import Autocomplete from 'react-native-autocomplete-input';
import { TextInput } from 'react-native-gesture-handler';

import RBSheet from "react-native-raw-bottom-sheet";

// +919607352625

export default function ImprovedUiComponent() {

    const [sy, setSy] = useState(0)

    const refRBSheet = useRef();

    const data = [
        // { name: 'android' },
        // { name: 'bndroid' },
        // { name: 'cndroid' }
    ];
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'red', width: '100%', flex: 1 }} >
                <View style={{ flexDirection: 'row', flex: 3 }}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 9 }}>
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
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 0, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={{ flex: 9 }} onPress={() => refRBSheet.current.open()}>
                        Ani, xyz, pqr,Ani, xyz, pqr,Ani
                        </Text>
                </View>
            </View>
            <View style={{ flex: 1, width: '100%', position: 'absolute', zIndex: 1 }}>
                <Autocomplete
                    data={data}
                    defaultValue=''
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={{ height: '50%', top: 100 }}>
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
                closeOnPressMask={false}
                height={500}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}>
                <View style={{ height: '100%' }}>
                    <View style={{ height: '80%' }}>
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
                    <View style={{ height: '20%' }}>
                        <TextInput> HI </TextInput>
                    </View>
                </View>
            </RBSheet>
        </SafeAreaView >
    );
}

//1.53 to 2.11
