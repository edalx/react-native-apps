import React from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FadeInImage } from './FadeInImage'

const windowWidth = Dimensions.get('window').width
interface Props {
    pokemon: SimplePokemon
}
export const PokemonCard = ({ pokemon }: Props) => {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.9}
            >
                <View style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4
                }}>
                    <View>
                        <Text style={styles.name}>
                            {pokemon.name}
                            {'\n#' + pokemon.id}
                        </Text>
                    </View>
                    <View style={styles.pokebolaContainer}>
                        <Image
                            source={require('../assets/pokebola-blanca.png')}
                            style={styles.pokebola}
                        />
                    </View>
                    <FadeInImage
                        uri={pokemon.picture}
                        style={styles.pokemonImage}
                    />

                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 80,
        height: 80,
        position: 'absolute',
        right: -20,
        bottom: -20

    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8
    },
    pokebolaContainer: {
        // backgroundColor: 'blue',
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        overflow: 'hidden'
    }
});