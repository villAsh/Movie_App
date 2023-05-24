
import { addToList } from "../../Features/ListSlice";
export const AddToWatchlist = (movie,dispatch) => {

    dispatch(addToList(movie))
}