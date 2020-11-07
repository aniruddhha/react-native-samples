import * as React from 'react';
import { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import Autocomplete from 'react-native-autocomplete-input';
import { TextInput } from 'react-native-gesture-handler';
import { Dimensions, Keyboard } from 'react-native';

// +919607352625

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function UiComponent() {

    const [sy, setSy] = useState(0)
    const [htLst, setHtLst] = useState(0)
    const [mdHt, setMdHt] = useState(0)

    const [dimensions, setDimensions] = useState({ window, screen });
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    function onKeyboardDidShow(e) {
        setKeyboardHeight(e.endCoordinates.height);
    }

    function onKeyboardDidHide() {
        setKeyboardHeight(0);
    }

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
        return () => {
            Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
        };
    }, []);

    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };

    const data = [
        // { name: 'android' },
        // { name: 'bndroid' },
        // { name: 'cndroid' }
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'red', position: 'absolute', width: '100%', top: 0, zIndex: 1 }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 9 }}>
                        <Text style={{ fontSize: 11 }}>
                            You can also connect to the development server over Wi-Fi.  You can also connect to the development server over Wi-Fi.
                            You can also connect to the development server over Wi-Fi.  You can also connect to the development server over Wi-Fi.
                            You can also connect to the development server over Wi-Fi.  You can also connect to the development server over Wi-Fi.
                            You can also connect to the development server over Wi-Fi.  You can also connect to the development server over Wi-Fi.
                          </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={{ flex: 9 }}>
                        Ani, xyz, pqr,Ani, xyz, pqr,Ani
                        </Text>
                </View>
                <View onLayout={ev => {
                    console.log(ev.nativeEvent.layout)
                    setSy(ev.nativeEvent.layout.height + ev.nativeEvent.layout.y)
                }} style={{ flex: 1, width: '100%', position: 'absolute', top: '100%' }}>
                    <Autocomplete
                        data={data}
                        defaultValue=''
                        renderItem={({ item, i }) => (
                            <TouchableOpacity>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: 'green', position: 'absolute', top: sy, alignContent: 'stretch', width: '100%', height: mdHt }}>
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
                    renderItem={({ item, index }) =>
                        <Text style={{ height: 35 }}>Hi {item.key}</Text>}
                    ItemSeparatorComponent={renderSeparator}
                />
            </View>
            <View style={{ backgroundColor: 'blue', position: 'absolute', bottom: 0, width: '100%' }} onLayout={ev => {
                console.log(`Last Height - ${ev.nativeEvent.layout.height}`)
                console.log(`Window Height - ${window.height}`)
                console.log(`Screen Height - ${screen.height}`)
                console.log(`Head Height - ${sy}`)
                console.log(`Keyboard Height - ${keyboardHeight}`)
                console.log(`Md Ht - ${window.height - sy - ev.nativeEvent.layout.height - keyboardHeight}`)
                setMdHt(window.height - sy - ev.nativeEvent.layout.height - keyboardHeight - 65)
            }}>
                <TextInput style={{ height: 80 }}></TextInput>
            </View>
        </SafeAreaView >
    );
}

//1.53 to 2.11
