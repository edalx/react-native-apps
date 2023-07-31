import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingsScren = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ marginTop: insets.top }}>
            <Text>
                Settings Scren
            </Text>
        </View>

    )
}
