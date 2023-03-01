import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
    name : 'WatchList',
    initialState : [],
    reducers : {
        addToList(state,action){
            //This adds same media multiple times
            // state.push(action.payload); 

            const added = state.find(item => {return item.id === action.payload.id});
            if(added){
                alert("you already have this in you WatchList");
            }else{
                state.push(action.payload);
            }
        },
        remove(state,action){
            return state.filter((media) => media.id !== action.payload)
        },
        clearList(state){
            return state = []
        }
    }
});

export default ListSlice.reducer;
export const { addToList,remove,clearList } = ListSlice.actions;