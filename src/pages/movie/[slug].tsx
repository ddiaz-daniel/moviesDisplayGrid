import { Movie } from '@/types/movie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { fetchMovie } from '../../utilities/getData';
import { FaImdb } from 'react-icons/fa';


interface Props {
    // any props you want to pass to the component
}

const MoviePage: React.FC<Props> = (props) => {
    const router = useRouter();
    const { slug } = router.query;

    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const getMovie = async () => {
            const data = await fetchMovie(slug as string);
            setMovie(data);
        };
        getMovie();
    }, [slug]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <div className='container flex flex-row pt-16 text-white mx-60'>
                <img src={movie.poster} alt={movie.title} />
                <div className='flex flex-col px-20'>
                    <h1 className='text-4xl pb-8'>{movie.title}</h1>
                    <p className=' text-xl pb-8'>{`${movie.released_on.substring(0, 4)}, ${movie.genres.join("/ ")}, ${movie.length}`}</p>
                    <p>{`Director: ${movie.director.length > 1 ? movie.director : movie.director.join(", ")}`}</p>
                    <p>{`Cast: ${movie.cast.join(", ")}`}</p>
                    <p className='py-8'>{movie.overview}</p>
                    <div className='flex flex-row justify-evenly pt-16'>
                        <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-white">
                            <p className="text-white text-xl font-bold">{movie.classification}</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <FaImdb size={60} color={"#F3CE13"} />
                            <p>{`${movie.imdb_rating}`}</p>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default MoviePage;
