import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList } = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <Text style={{
        ...styles.title,
        ...styles.globalMargin,
        color: 'black',
        top: top + 20,
      }}>PokemonScreen</Text>
    </>
  )
}
