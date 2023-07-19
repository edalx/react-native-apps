import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TareaScreen_5 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
            <View style={styles.cajaAzul}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#284258',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    cajaMorada: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    cajaNaranja: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    cajaAzul: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
});
