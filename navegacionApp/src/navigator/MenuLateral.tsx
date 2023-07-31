import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StackNavigator } from './StackNavigator';
import { SettingsScren } from '../screens/SettingsScren';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const SettingsStackScreen = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="SettingsScreen"
//                 component={SettingsScren}
//             />
//         </Stack.Navigator>
//     )
// }

export const MenuLateral = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScren} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            {/* Parte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones del menu */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('StackNavigator')}
                >
                    <Text style={styles.menuTexto}>Navegacion</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.menuTexto}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}