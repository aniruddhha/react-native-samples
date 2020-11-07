
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from './login/component/login.component'
import UiComponent from './ui/ui.component';

//12.00 to 1.44

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={LoginComponent} />
        <Stack.Screen name='ui' component={UiComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}