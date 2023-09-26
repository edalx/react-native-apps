import React, { useEffect, useState } from 'react'
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { pokeApi } from '../api/pokemonApi'
export const usePokemon = (id: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull)

    const loadPokemon = async () => {
        const resp = await pokeApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(resp.data);
        setIsLoading(false);
    }
    useEffect(() => {
        loadPokemon();
    }, [])


    return {
        isLoading,
        pokemon
    }
}
