import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home, Splash } from '../pages';


const Stack = createStackNavigator();

const Router =()=>{
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default Router;
