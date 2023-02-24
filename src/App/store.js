import { configureStore } from "@reduxjs/toolkit";
import ShowReducer from '../Features/ShowsSlice';
import Info from '../Features/InfoSlice'
const store = configureStore({
    reducer : {
        shows : ShowReducer,
        info : Info,
    }
})

export default store;