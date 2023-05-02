import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Highlights from "./Carousel";
import Marquee from "react-fast-marquee";
import { fetchMovies } from "../utilities/getData";
import { Movie } from "@/types/movie";
import MovieSlider from "./MovieSlider";


const MoviesList = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchMovies();
                setMovies(data);

                const allGenres = data.flatMap(movie => movie.genres);
                const uniqueGenres = Array.from(new Set(allGenres)).sort((a, b) => a.localeCompare(b));
                setGenres(uniqueGenres);

            } catch (error) {
                console.log('Error fetching movie data:', error);
            }
        };
        getData();

    }, []);


    const moviesByGenre = (movies: Movie[], genre: string): Movie[] => {
        return movies.filter(movie => movie.genres.includes(genre));
    }



    return (
        <div className="bg-gray-900 w-max-screen text-white mx-auto pt-10">
            {genres.length > 0 ? genres.map((genre) => (
                <div key={genre} className="bg-gray-900 w-max-screen">
                    <h2 className="text-2xl font-bold text-left px-5 py-5 text-yellow-400">{genre}</h2>
                    <div className="flex flex-wrap">
                        <MovieSlider movies={moviesByGenre(movies, genre)} />
                    </div>
                </div >
            )) : <h2 className="text-2xl font-bold text-center pt-8">Loading...</h2>
            }
        </div >
    );
};

export default MoviesList;
