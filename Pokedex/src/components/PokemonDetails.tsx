import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces'
import { ScrollView } from 'react-native-gesture-handler';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}
export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ ...StyleSheet.absoluteFillObject }}>
            <View style={{ ...styles.container, marginTop: 370 }}>
                <Text style={{ ...styles.title }}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{ ...styles.regularText }}
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
                {/* Peso */}
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight} kg</Text>
            </View>
            {/* Types */}
            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title} >Sprites</Text>

            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprites}
                />
            </ScrollView>
            {/* Habilidades */}
            <View style={styles.container}>
                <Text style={styles.title}>Habilidades base</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={ability.name}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Movimientos */}
            <View style={styles.container}>
                <Text style={styles.title}>Movimientos</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={move.name}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    regularText: {
        fontSize: 19,
        marginRight: 10
    },
    basicSprites: {
        width: 100,
        height: 100
    }
});