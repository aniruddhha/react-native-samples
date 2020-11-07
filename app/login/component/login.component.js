import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Style from './login.style'

export default function LoginComponent({ navigation }) {

    function hi() {
        navigation.navigate('ui')
    }

    return (
        <View style={Style.dim} >
            <Text>Login Component</Text>
            <Button title='Okay' onPress={hi}> </Button>
        </View>
    );
}