import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.module.css';
import { Movie } from '@/types/movie';
import { fetchMovie } from '../utilities/getData';
import CarouselMovieCard from './CarouselMovieCard';

const Highlights = () => {

    const movieSlugs = ["the-dark-knight-2008", "pulp-fiction-1994", "schindlers-list-1993", "raiders-of-the-lost-ark-1981"];
    const [movies, setMovies] = useState<Movie[]>([]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        swipeToSlide: true,
        arrows: false,

    };

    useEffect(() => {
        const fetchMovies = async () => {
            const promises = movieSlugs.map(async (slug) => {
                const movie = await fetchMovie(slug);
                return movie;
            });

            try {
                const moviesData = await Promise.all(promises);
                setMovies(moviesData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="flex flex-row place-content-center">

            <Slider {...settings} className="flex items-center mx-auto w-full h-96">
                <div className="relative flex flex-row place-content-center w-full mx-auto h-96">
                    <img src="/earth.png" alt="Keyone cinema logo" className="relative object-cover object-bottom w-full h-96 self-center" />
                    <div className={`absolute bottom-0 bg-black bg-opacity-50 flex flex-col justify-end h-fit p-4 w-full`}>
                        <p className="text-sm font-bold mb-2 text-white text-center">Attention Kashyk cinephiles! Fresh from planet Earth, a spectacular range of movies is now available for your out-of-this-world entertainment. Don't miss out on the latest blockbusters from across the galaxy!</p>
                    </div>
                </div>
                {movies.map((movie, index) => (
                    <CarouselMovieCard key={`$movie-card-${index}`} movie={movie} index={index} />
                ))}
            </Slider>


        </div>
    );
};

export default Highlights;
