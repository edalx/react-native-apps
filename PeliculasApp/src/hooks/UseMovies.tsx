import React, { useEffect, useState } from 'react'
import moviewDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {
        const resp = await moviewDB.get<MovieDBNowPlaying>('/now_playing');
        setPeliculasEnCine(resp.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {
        peliculasEnCine,
        isLoading
    }
}
