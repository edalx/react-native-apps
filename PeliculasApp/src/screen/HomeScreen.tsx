import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import moviewDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';

export const HomeScreen = () => {
    const navigation = useNavigation<any>();
    useEffect(() => {
        moviewDB.get<MovieDBNowPlaying>('/now_playing').then(resp => {
            console.log(resp.data.results[0].title);
        });
    }, []);


    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title='Ir Detalle'
                onPress={() => navigation.navigate('DetailScreen')}
            />
        </View>
    )
}
