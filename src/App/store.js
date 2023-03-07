import { configureStore } from "@reduxjs/toolkit";
import ShowReducer from '../Features/ShowsSlice';
import MoviesReducer from '../Features/MoviesSlice'
import Info from '../Features/InfoSlice'
import ListSlice from "../Features/ListSlice";
const store = configureStore({
    reducer : {
        movies : MoviesReducer,
        shows : ShowReducer,
        info : Info,
        WatchList : ListSlice,
    }
})

export default store;