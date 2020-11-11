import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, TextInput, Colors } from 'react-native';

export default function FlexBasics() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'red' }} >
                <Text>
                    if you're tryign to figure out why something isn't displaying like you think it should, start with the (most) parent element and make sure it's giving enough space to it's children to do what they need to do. In other words, try setting it to flex:1 and see if that helps, then go to the next child and repeat.
                </Text>
            </View>
            <View style={{ backgroundColor: 'green', flex: 1 }} ></View>
            <View style={{ backgroundColor: 'blue', flex: 1 }} ></View>
        </SafeAreaView >
    );
}

        //1.53 to 2.11
