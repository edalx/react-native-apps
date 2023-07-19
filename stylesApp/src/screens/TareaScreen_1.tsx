import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TareaScreen_1 = () => {
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
        flex: 9,
        backgroundColor: '#284258',
        flexDirection: 'column'
    },
    cajaMorada: {
        flex: 1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        flex: 7,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    cajaAzul: {
        flex: 1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    },
});
