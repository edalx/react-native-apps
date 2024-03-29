import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Scren } from '../screens/Tab1Scren';
import { Tab2Scren } from '../screens/Tab2Scren';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}



const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            // barStyle={{
            //     color: 'white'
            // }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = "";
                    switch (route.name) {
                        case 'Tab1Scren':
                            iconName = 'boat';
                            break;
                        case 'Tab2Scren':
                            iconName = 'code-slash';
                            break;
                        case 'StackNavigator':
                            iconName = 'fitness';
                            break;
                    }
                    return <Text style={{ color }}><Icon  name={iconName} size={25} /></Text>
                }
            })}
            
            // activeColor="#f0edf6"
            // inactiveColor="white"
            barStyle={{ backgroundColor: '#694fad', borderRadius:0}}
        >
            <BottomTabAndroid.Screen name="Tab1Scren" component={Tab1Scren} options={{ title: 'Tab1' }} />
            <BottomTabAndroid.Screen name="Tab2Scren" component={TopTabNavigator} options={{ title: 'Tab2' }} />
            <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Stack' }} />
        </BottomTabAndroid.Navigator>
    );
}






const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            screenOptions={({ route }) => ({
                headerBackgroundContainerStyle: {
                    backgroundColor: 'white'
                },
                tabBarActiveTintColor: colores.primary,
                tabBarItemStyle: {
                    borderTopColor: colores.primary
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: String = '';
                    switch (route.name) {
                        case 'Tab1Scren':
                            iconName = 'T1';
                            break;
                        case 'Tab2Scren':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'St';
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}
        >
            <BottomTabIOS.Screen name="Tab1Scren" component={Tab1Scren} options={{ title: 'Tab1' }} />
            <BottomTabIOS.Screen name="Tab2Scren" component={Tab2Scren} options={{ title: 'Tab2' }} />
            <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Stack' }} />
        </BottomTabIOS.Navigator>
    );
}