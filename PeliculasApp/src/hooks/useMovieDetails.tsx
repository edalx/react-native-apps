import { useEffect, useState } from "react";
import moviewDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    cast: Cast[];
    movieFull?: MovieFull;
    isLoading: boolean;
}
export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });
    const getMovieDetails = async () => {
        const movieDetailsPromise = moviewDB.get<MovieFull>(`/${movieId}`);
        const castPromise = moviewDB.get<CreditsResponse>(`/${movieId}/credits`);
        const [movieDetailsResponse, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return {
        ...state
    }
}
