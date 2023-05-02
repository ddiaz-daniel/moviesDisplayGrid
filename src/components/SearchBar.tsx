import { Movie } from '@/types/movie';
import Link from 'next/link';
import { useState, useEffect, SetStateAction } from 'react';
import { SearchOutline } from 'react-ionicons';
import { searchMovies } from '../utilities/getData';

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState<Movie[]>();

    useEffect(() => {
        if (searchValue === '') {
            setSearchResults([]);
            return;
        }
        const getSearchResults = async () => {
            const response = await searchMovies(searchValue);
            setSearchResults(response);
        };

        getSearchResults();
    }, [searchValue]);

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {

        setSearchValue(event.target.value);

    };

    return (
        <div className='flex flex-col'>
            <form className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-700 rounded-xl py-1 px-3 text-white w-64 pr-8"
                    value={searchValue}
                    onChange={handleInputChange}
                />
                <div className="absolute right-0 top-0 mt-1 mr-2">
                    <SearchOutline color={'#00000'} height="20px" width="20px" />
                </div>
            </form>
            {!!searchResults && searchResults.length > 0 ? (
                <div className="absolute top-14 w-64">
                    <ul>
                        {searchResults.map((movie) => (
                            <Link href={`/movie/${movie.slug}`} className="flex items-start w-full relative">
                                <li key={movie.id} className="w-full bg-slate-700 p-0.5">
                                    <div className="flex flex-row items-center bg-slate-800 w-full">
                                        <img src={movie.poster} alt={movie.title} className="w-8 m-1" />
                                        <p className='ml-4 truncate '>{movie.title}</p>
                                    </div>
                                </li>
                            </Link >
                        ))}
                    </ul>
                </div>
            ) : <div>
                {searchValue &&
                    <p className="absolute top-14 w-64">No results</p>
                }
            </div>}
        </div>
    );
}

export default SearchBar;
