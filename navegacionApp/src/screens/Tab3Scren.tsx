import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab3Scren = () => {
    useEffect(() => {
        console.log('Tab3Screen effect');
      }, [])
      
    return (
        <View>
            <Text>Tab3 Screen</Text>
        </View>
    )
}
