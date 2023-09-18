import React from 'react'
import { Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currecyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}
export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="gray"
                        size={16}
                    />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16, color: 'black' }}>
                    {movieFull.overview}
                </Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 16, color: 'black' }}>
                    {currecyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
                {/* Casting */}
                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black'  }}>
                        Actores
                    </Text>
                    <CastItem actor={cast[0]} />
                </View>
            </View>
        </>
    )
}
