import { fetchShows } from "../Features/ShowsSlice";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
// import { ORIGINAL_IMG } from "../../config";
export default function Banner() {
	const { shows} = useSelector((state) => state.shows);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchShows());
    },[]);
    const banner = shows[Math.floor(Math.random() * 20)];
    return (
		<div className="h-[100vh] bg-black flex items-center justify-start md:px-4 font-serif relative top-0" style={{
            backgroundSize : 'cover',
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
            backgroundPosition : 'cover cover',
			boxShadow : 'inset 52px 39px 75px 18px rgba(0,0,0,0.6)',
        }}>
			<div className="flex flex-col items-start justify-around">
				<h1 className="text-6xl text-white font-serif mb-4">{banner?.title || banner?.name}</h1>
				<div className="flex items-center justify-between md:space-x-5">
					<button className="bg-slate-500 bg-opacity-40 hover:bg-opacity-90 px-7 py-1 rounded-sm text-white">
						<span>Play</span>
					</button>
					<button className="bg-slate-500 bg-opacity-40 hover:bg-opacity-90 px-7 py-1 rounded-sm text-white">
						<span>Watch List</span>
					</button>
				</div>
				<div className="md:max-w-md mt-5">
					<p className="text-white">
						{banner?.overview}
					</p>
				</div>
			</div>
		</div>
	);
}