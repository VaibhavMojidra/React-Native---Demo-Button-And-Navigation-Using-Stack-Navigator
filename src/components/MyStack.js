import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './../screens/FirstScreen';
import ThirdScreen from '../screens/ThirdScreen';
import SecondScreen from '../screens/SecondScreen';

const Stack=createStackNavigator();

const MyStack= () =>(
<Stack.Navigator>
    <Stack.Screen name="First" component={FirstScreen}/>
    <Stack.Screen name="Second" component={SecondScreen}/>
    <Stack.Screen name="Third" component={ThirdScreen}/>
</Stack.Navigator>
);


export default MyStack;