import {  createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_KEY from "../config";
const STATUS = Object.freeze({
    IDLE : 'idle',
    LOADING : 'loading',
    ERROR : 'error'
});

const MovieSlice = createSlice({
    name : "movies",
    initialState : {
        movies : [],
        status : STATUS.IDLE,
    },
    reducers : {
        setMovies(state,action){
            state.movies = action.payload;
        }
    },
    // extraReducers : (builder) => {
    //     builder.addCase(fetchMovies.pending, (state) => {
    //         state.status = STATUS.LOADING;
    //     })
    //     builder.addCase(fetchMovies.fulfilled,(state,action) => {
    //         state.status = STATUS.IDLE;
    //         state.movies = action.payload;
    //     })
    //     builder.addCase(fetchMovies,(state) => {
    //         state.status = STATUS.ERROR;
    //     })
    // }
});
// export const fetchMovies = createAsyncThunk(
//     'movies/fetchMovies',
//     async () => {
//         const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
//         const data = res.data.results;
//         // console.log('movies',data)
//         return data;
//     }
// )

export function fetchMovies(){
    return async function fetchMoviesThunk(dispatch){
        const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
        const data = res.data.results;
        dispatch(setMovies(data))
    }
}

export function searchMovies(movie){
    return async function searchMoviesThunk(dispatch){
        const res = await axios.get(`
        https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1`);
        const data = res.data.results;
        dispatch(setMovies(data));
    }
}



export default MovieSlice.reducer;
export const { setMovies } = MovieSlice.actions;