import React from 'react'
import { StyleSheet, Text, View } from 'react-native'



export const DimensionesScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    }
});