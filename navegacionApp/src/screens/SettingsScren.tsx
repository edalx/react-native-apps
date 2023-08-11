import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScren = () => {
    const insets = useSafeAreaInsets();
    const { authState } = useContext(AuthContext)
    return (
        <View style={{ marginTop: insets.top }}>
            <Text style={styles.title}>Settings Scren</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
            {
                authState.favoriteIcon && (
                    <Icon
                        name={authState.favoriteIcon}
                        size={150}
                        color={colores.primary}
                    />
                )
            }
        </View>

    )
}
