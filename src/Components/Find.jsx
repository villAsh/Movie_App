import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, searchMovies } from '../Features/MoviesSlice';
import { fetchShows, searchShows } from '../Features/ShowsSlice';
import Cards from './Cards';


export default function Find() {
    const [show, setShow] = useState('');
    const [movie,setMovie] = useState('');
    const { shows } = useSelector((state) => state.shows );
    const { movies } = useSelector((state) => state.movies)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchShows());
        dispatch(fetchMovies());
    },[dispatch]);

    const handleShow = (e) => {
        setShow(e.target.value);
        dispatch(searchShows(show))
    }

    const ShowClick = () => {
        console.log(show);
    }

    const handleMovie = (e) => {
        setMovie(e.target.value);
        dispatch(searchMovies(movie));
    }

    const MovieClick = () => {
        console.log(movie);
    }
    return (
        <div className="bg-black md:min-h-[90.5vh] px-5">
            <div className="md:px-4 text-white pt-5 flex justify-between items-center pb-5">
                <h1 className="text-4xl font-body font-semibold">Search Shows</h1>
                <div className='flex items-center justify-center space-x-3'>
                    <div className="flex items-center justify-between bg-white text-black caret-red-500 hover:outline hover:outline-2 hover:outline-red-500 px-4 py-1 rounded-md">
                        <BsSearch className='text-xl' />
                        <input type="text" value={show} onChange={handleShow} className="pl-2 outline-none" />
                    </div>
                    <button onClick={ShowClick}
                        className='transition-all duration-200 border border-red px-6 py-1 rounded-lg bg-white text-black hover:bg-red hover:text-white font-body'>
                        Search
                    </button>
                </div>

            </div>
            <Cards media={shows} title={false}/>

            <div className="md:px-4 text-white pt-5 flex justify-between items-center pb-5">
                <h1 className="text-4xl font-body font-semibold">Search Movies</h1>
                <div className='flex items-center justify-center space-x-3'>
                    <div className="flex items-center justify-between bg-white text-black caret-red-500 hover:outline hover:outline-2 hover:outline-red-500 px-4 py-1 rounded-md">
                        <BsSearch className='text-xl' />
                        <input type="text" value={movie} onChange={handleMovie} className="pl-2 outline-none" />
                    </div>
                    <button onClick={MovieClick}
                        className='transition-all duration-200 border border-red px-6 py-1 rounded-lg bg-white text-black hover:bg-red hover:text-white font-body'>
                        Search
                    </button>
                </div>

            </div>
            <Cards media={movies} title={false}/>
        </div>
    );
}