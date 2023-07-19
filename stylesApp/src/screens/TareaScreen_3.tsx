import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TareaScreen_3 = () => {
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
        justifyContent:'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        flexDirection: 'column-reverse',
        borderColor: 'white',
        backgroundColor: '#5856D6',
        alignSelf: 'flex-end'
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        alignSelf: 'center'
    },
});
