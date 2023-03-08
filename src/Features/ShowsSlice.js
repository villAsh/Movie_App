import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_KEY from "../config"
const STATUS = Object.freeze({
    IDLE : 'idle',
    LOADING : 'loading',
    ERROR : 'error'
});
const ShowsSlice = createSlice({
    name : 'shows',
    initialState : {
        shows : [],
        status : STATUS.IDLE
    },
    reducers : {
        setShows(state,action){
            state.shows = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        }
    }
});

export function fetchShows(){
    return async function fetchShowsThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try{
            const res = await axios.get(
                `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
            );
            const data = await res.data.results;
            dispatch(setShows(data));
            dispatch(setStatus(STATUS.IDLE));
        }catch(error){
            console.log(error);
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}

export function searchShows(show){
    return async function searchShowsThunk(dispatch){
        try{
            const res = await axios.get(`
            https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${show}`);
            const data = await res.data.results;
            console.log(data)
            dispatch(setShows(data));
        }catch(err){
            console.log(err)
        }
    }
}

export default ShowsSlice.reducer;
export const { setShows , setStatus } = ShowsSlice.actions;