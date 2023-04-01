// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { CARD_IMG } from "../config";
import { remove, clearList } from "../Features/ListSlice";

export default function WatchList() {
    const { WatchList } = useSelector((state) => state);
    // console.log(WatchList);
    const dispatch = useDispatch();
    const handleRemove = (e, id) => {
        e.preventDefault();
        console.log(id)
        dispatch(remove(id))

    }
    const handleClear = () => {
        dispatch(clearList());
    }

    const list = WatchList.map((media) => (
        <div key={media.id}  >
            <Link to={`${media?.media_type === 'tv' || media.type ? 'tv' : 'movie'}/${media.id}`}>
                <div className="p-5 transform transition duration-500 hover:scale-110 hover:ease-in-out">
                    <img src={`${CARD_IMG}${media?.poster_path}`} alt="poster" />

                </div>

            </Link>
            <button
                onClick={(e) => handleRemove(e, media.id)}
                className="m-5 border border-red-500 rounded-md px-6 py-1 text-white transition 
                hover:bg-red-500 hover:text-black"
            >
                Remove
            </button>
        </div>
    ));
    return WatchList.length !== 0 ? (
        <>
            <div className="bg-black md:min-h-[90.5vh] px-5 font-body">
                <div className="flex justify-between items-center py-5">
                    <h1 className="text-white text-4xl font-semibold">My List</h1>
                    <button onClick={handleClear}
                        className="
                border border-red-500 rounded-md px-6 py-1 text-white transition 
                hover:bg-red-500 hover:text-black"
                    >
                        Clear Watch List
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
                    {list}
                </div>

            </div>

        </>
    ) : (
        <div className="bg-black md:min-h-[90.5vh] px-5 flex items-center justify-center font-body">
            <h1 className="text-white text-4xl font-semibold ">List is Empty</h1>
        </div>
    );
}