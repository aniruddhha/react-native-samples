import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Style from './login.style'

export default function LoginComponent({ navigation }) {

    function normal() {
        navigation.navigate('ui')
    }

    function improved() {
        navigation.navigate('comment')
    }

    function dialog() {
        navigation.navigate('dialog')
    }

    function fb() {
        navigation.navigate('fb')
    }

    return (
        <View style={Style.dim} >
            <Button title='Normal' onPress={normal}> </Button>
            <Button title='Improved' onPress={improved}> </Button>
            <Button title='Improved Dialog' onPress={dialog}> </Button>
            <Button title='FB' onPress={fb}> </Button>
        </View>
    );
}