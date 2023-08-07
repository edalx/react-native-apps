import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

export const ContactScreen = () => {
    const { signIn, authState } = useContext(AuthContext)
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                ContactScreen
            </Text>

            {
                !authState.isLoggegIn && <Button title="SignIn" onPress={signIn} />
            }
        </View>
    )
}
