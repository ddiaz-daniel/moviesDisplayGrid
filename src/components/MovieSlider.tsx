import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Movie } from '@/types/movie';
import Link from 'next/link';

interface MovieSliderProps {
    movies: Movie[];
}

const MovieSlider = ({ movies }: MovieSliderProps) => {

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        arrows: true,
    };

    return (
        movies.length < 5 ?
            <div className="flex items-start mx-auto w-full">
                {movies.map(movie => (
                    <div key={`movie-container-${movie.title}`} className="container flex items-start w-1/5">
                        <Link href={`/movie/${movie.slug}`} className="flex items-start w-full">
                            <div className="relative">
                                <img src={movie.poster} alt={movie.title} className="object-scale-down w-60" />
                                <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start p-4 w-full opacity-0 hover:opacity-100`}>
                                    <h2 className="text-xl font-bold mb-2 text-white text-center">{movie.title}</h2>
                                    <p className="text-gray-300 h-max-3/4 overflow-hidden overflow-ellipsis line-clamp-5">{movie.overview}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            :
            <Slider {...settings} className="flex items-start mx-auto w-full">
                {movies.map(movie => (
                    <div key={`movie-container-${movie.title}`} className="flex items-start w-1/5">
                        <Link href={`/movie/${movie.slug}`} className="flex items-start w-full relative">
                            <div className="relative">
                                <img src={movie.poster} alt={movie.title} className="object-scale-down w-60" />
                                <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start p-4 w-full opacity-0 hover:opacity-100`}>
                                    <h2 className="text-xl font-bold mb-2 text-white text-center">{movie.title}</h2>
                                    <p className="text-gray-300 h-max-2/4 overflow-hidden overflow-ellipsis line-clamp-5">{movie.overview}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
    );
};

export default MovieSlider;
