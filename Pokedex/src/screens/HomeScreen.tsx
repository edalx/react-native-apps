import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <View
        style={{ alignItems: 'center' }}
      >
        <FlatList
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              color: 'black',
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom:20
            }}>PokemonScreen</Text>
          )}
          data={simplePokemonList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(pokemon) => pokemon.id}
          numColumns={2}
          renderItem={({ item }) => (
            <PokemonCard pokemon={item} />
          )}
          //infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={(
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color="grey"
            />
          )}
        />
      </View>
    </>
  )
}
