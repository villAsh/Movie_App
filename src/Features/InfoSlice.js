import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_KEY from "../config";

const STATUS = Object.freeze({
    IDLE : 'idle',
    LOADING : 'loading',
    ERROR : 'error'
});

const InfoSlice = createSlice({
    name : 'infoSlice',
    initialState : {
        VideoData : [],
        SingleData : [],
        status : STATUS.IDLE,
    },
    reducers: {
        setSingleData(state,action){
            state.SingleData = action.payload;
        },
        setVideoData(state,action){
           state.VideoData = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        },
        removeData(state){
            state.SingleData = []
            state.VideoData = []
        }
    }
});

export function fetchData(id){
    return async function fetchDataThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`);
            const data = await res.data;
            dispatch(setSingleData(data));
            dispatch(setStatus(STATUS.IDLE));
        }catch(error){
            console.log(error);
            dispatch(setStatus(STATUS.ERROR));
        }
      
    }
}

export function fetchVideoData(id){
    return async function fetchSingleDataThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`);
            const data = await res.data.results[0];
            dispatch(setVideoData(data));
            dispatch(setStatus(STATUS.IDLE));
        }catch(error){
            console.log(error);
            dispatch(setStatus(STATUS.ERROR));
        }
    }   
}

export default InfoSlice.reducer;
export const { setSingleData,setVideoData , setStatus, removeData} = InfoSlice.actions;