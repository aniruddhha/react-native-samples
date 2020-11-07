import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import Autocomplete from 'react-native-autocomplete-input';
import { TextInput } from 'react-native-gesture-handler';

// +919607352625

export default function UiComponent() {

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
            <View style={{ flex: 1, backgroundColor: 'red', zIndex: 1, position: 'absolute', width: '100%' }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 9 }}>
                        <Text style={{ fontSize: 11 }}>
                            You can also connect to the development server over Wi-Fi.  You can also connect to the development server over Wi-Fi.
                           </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={{ flex: 9 }}>
                        Ani, xyz, pqr
                        </Text>
                </View>
                <View style={{ flex: 1, zIndex: 1, width: '100%', position: 'absolute', top: '100%' }}>
                    <Autocomplete
                        data={data}
                        defaultValue=''
                        renderItem={({ name, i }) => (
                            <TouchableOpacity>
                                <Text>{name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <View style={{ flex: 8, backgroundColor: 'green', marginTop: '31%' }}>
                <FlatList
                    data={[
                        { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                        { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
                        { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
                        { key: 'Ruby' }, { key: 'Rails' }, { key: '.Net' },
                        { key: 'Perl' }, { key: 'Sap' }, { key: 'Python' },
                        { key: 'Ajax' }, { key: 'C++' }, { key: 'Ruby' },
                        { key: 'Rails' }, { key: '.Net' }, { key: 'Perl' }
                    ]}
                    renderItem={({ item, index }) =>
                        <Text >Hi {index}</Text>}
                    ItemSeparatorComponent={renderSeparator}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <TextInput></TextInput>
            </View>
        </SafeAreaView >
    );
}

//1.53 to 2.11
