import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StackNavigator } from './StackNavigator';
import { SettingsScren } from '../screens/SettingsScren';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScren} />
        </Drawer.Navigator>
    );
}