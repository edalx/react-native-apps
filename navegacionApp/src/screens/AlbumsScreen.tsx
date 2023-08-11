import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const AlbumsScreen = () => {
    const {authState, logout} = useContext(AuthContext) 
    return (
        <View>
            <Text>AlbumsScreen</Text>

            {
                authState.isLoggegIn && <Button title="Logout" onPress={logout} />
            }
        </View>
    )
}
