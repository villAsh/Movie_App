import { fetchShows } from "../../Features/ShowsSlice";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import Cards from "../Extras/Cards";
import Banner from "../Banner/Banner";
import { AddToWatchlist } from "../Helper/Helper";

// import { ORIGINAL_IMG } from "../../config";
export default function Shows() {
	const { shows } = useSelector((state) => state.shows);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchShows());
    },[dispatch]);

    const banner = shows[Math.floor(Math.random() * 20)];
    return (
		<>
		<Banner banner={banner} AddToWatchlist={AddToWatchlist} dispatch={dispatch} media_type="show"/>
		<Cards media={shows} title={true} media_type="show" />
		</>
	
	);
}