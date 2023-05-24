import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../Features/MoviesSlice";
import Cards from "../Extras/Cards";
import Banner from "../Banner/Banner";
import { AddToWatchlist } from "../Helper/Helper";
export default function Movies() {
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies);
    console.log(movies)
    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const banner = movies[Math.floor(Math.random() * 20)];
    return (
        <>
            <Banner banner={banner} AddToWatchlist={AddToWatchlist} dispatch={dispatch} path="movie" />
            <Cards media={movies} title={true} media_type="movie"/>
        </>
    );
}