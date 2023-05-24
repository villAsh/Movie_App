import { fetchShows } from "../../Features/ShowsSlice";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import Cards from "../Extras/Cards";
import { addToList } from "../../Features/ListSlice";
import Banner from "../Banner/Banner";

// import { ORIGINAL_IMG } from "../../config";
export default function Shows() {
	const { shows } = useSelector((state) => state.shows);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchShows());
    },[dispatch]);

	const handleClick = (media) => {
		dispatch(addToList(media));
	}
    const banner = shows[Math.floor(Math.random() * 20)];
    return (
		<>
		   <Banner banner={banner} handleClick={handleClick} />
		<Cards media={shows} title={true} media_type="show" />
		</>
	
	);
}