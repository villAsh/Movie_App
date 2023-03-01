import { configureStore } from "@reduxjs/toolkit";
import ShowReducer from '../Features/ShowsSlice';
import Info from '../Features/InfoSlice'
import ListSlice from "../Features/ListSlice";
const store = configureStore({
    reducer : {
        shows : ShowReducer,
        info : Info,
        WatchList : ListSlice,
    }
})

export default store;