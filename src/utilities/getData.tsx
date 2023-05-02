import { Movie } from '../types/movie';


export const fetchMovie = async (movieId: string): Promise<Movie> => {
    const response = await fetch(`${process.env.API_URL}/${movieId}`, {
        headers: {
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
    })
    if (!response.ok) {
        throw new Error('Failed to fetch movie data')
    }

    const data = await response.json()

    return data as Movie
}

export const fetchMovies = async (): Promise<Movie[]> => {
    const response = await fetch(`${process.env.API_URL}`, {
        headers: {
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch movie data');
    }
    const data = await response.json();

    return data.movies as Movie[];
}

export const searchMovies = async (searchValue: string) => {
    const response = await fetch(`${process.env.API_URL}?q=${searchValue}`, {
        headers: {
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch movie data');
    }
    const data = await response.json();

    return data.movies as Movie[];
}