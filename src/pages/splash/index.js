import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Splash = ({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },3000)
    })
    return (
        <View style={{ flex:1,backgroundColor: 'red',}}>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default Splash;
