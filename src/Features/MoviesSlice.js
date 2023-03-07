import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        builder.addCase(fetchMovies.fulfilled,(state,action) => {
            state.status = STATUS.IDLE;
            state.movies = action.payload;
        })
        builder.addCase(fetchMovies,(state) => {
            state.status = STATUS.ERROR;
        })
    }
});
export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
        const data = res.data.results;
        // console.log('movies',data)
        return data;
    }
)


export default MovieSlice.reducer;