import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToList } from "../../Features/ListSlice";
import { fetchMovies } from "../../Features/MoviesSlice";
import Cards from "../Extras/Cards";
import Banner from "../Banner/Banner";
export default function Movies() {
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies);
    console.log(movies)
    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const handleClick = (movie) => {
        dispatch(addToList(movie))
    }
    const banner = movies[Math.floor(Math.random() * 20)];
    return (
        <>
            <Banner banner={banner} handleClick={handleClick} />
            <Cards media={movies} title={true} media_type="movie"/>
        </>
    );
}