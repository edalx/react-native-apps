import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Scren = () => {
    useEffect(() => {
        console.log('Tab1Screen effect');
    }, [])

    return (
        <View style={{ ...styles.globalMargin }}>
            <Text>
                <TouchableIcon iconName="bonfire-outline"/>
                <TouchableIcon iconName="cellular-outline"/>
                <TouchableIcon iconName="fast-food-outline"/>
                <TouchableIcon iconName="bonfire-outline"/>
                <TouchableIcon iconName="gift-outline"/>
                <TouchableIcon iconName="paw-outline"/>
                <TouchableIcon iconName="pulse-outline"/>
                <TouchableIcon iconName="skull-outline"/>
                <TouchableIcon iconName="thunderstorm-outline"/>
                <TouchableIcon iconName="umbrella-outline"/>
                <TouchableIcon iconName="trail-sign-outline"/>
            </Text>
        </View>
    )
}
