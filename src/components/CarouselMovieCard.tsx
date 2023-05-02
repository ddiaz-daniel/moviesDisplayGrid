import { Movie } from '@/types/movie';
import Link from 'next/link';
import React, { useState } from 'react';

interface MovieCardProps {
    movie: Movie;
    index: number;
}

const CarouselMovieCard: React.FC<MovieCardProps> = ({ movie, index }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <Link href={`/movie/${movie.slug}`}>
            <div className="relative cursor-pointer " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={movie.backdrop} alt={`Image for ${movie.title}`} className=" object-cover object-top w-full mx-auto h-96" />
                <div className={`absolute bg-black bg-opacity-50 flex bottom-0 h-fit p-4 w-full ${isHovering ? 'invisible' : 'visible'}`}>
                    <h2 className="text-xl font-bold ml-2 mb-2 text-white">{movie.title}</h2>
                </div>
                <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start p-4 w-full ${isHovering ? 'visible' : 'invisible'}`}>
                    <h2 className="text-xl font-bold mb-2 text-white text-center">{movie.title}</h2>
                    <p className="text-gray-300">{movie.overview}</p>
                </div>
            </div>
        </Link >
    );
};

export default CarouselMovieCard;
