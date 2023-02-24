import { configureStore } from "@reduxjs/toolkit";
import ShowReducer from '../Features/ShowsSlice';
const store = configureStore({
    reducer : {
        shows : ShowReducer,
    }
})

export default store;