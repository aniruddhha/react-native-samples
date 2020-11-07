import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAwareScrollView } from 'react-native';

import Autocomplete from 'react-native-autocomplete-input';
import { TextInput } from 'react-native-gesture-handler';

// +919607352625

export default function UiComponent() {

    const data = [
        { name: '#alignment' },
        { name: '#amazinggg' },
        { name: '#android-7.0' },
        { name: '#android-phone-test' },
        { name: '#Android-test' },
        { name: '#app-test-mode' },
        { name: '#APP8thMarch' },
        { name: '#app_testing' },
        { name: '#apphashtag' },
        { name: '#apptesting' },
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 3, backgroundColor: 'red', zIndex: 1 }}>
                <View style={{
                    flexDirection: 'row', flex: 1
                }}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 9 }}>
                        <Text style={{ fontSize: 11 }}>
                            You can also connect to the development server over Wi-Fi.
                            You'll first need to install the app on your device using a USB cable,
                            but once that has been done you can debug wirelessly by following these instructions.
                            You'll need your development machine's current IP address before proceeding.
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={{ flex: 9 }}>
                        Ani, xyz, pqr
                        </Text>
                </View>
                <View style={{ flex: 1, zIndex: 1, position: 'absolute', width: '80%', top: '70%', left: '10%' }}>
                    <Autocomplete
                        data={data}
                        defaultValue='a'
                        renderItem={({ tag, i }) => (
                            <TouchableOpacity>
                                <Text>{i}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <View style={{ flex: 8, backgroundColor: 'green' }}></View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <TextInput></TextInput>
            </View>
        </SafeAreaView >
    );

}
