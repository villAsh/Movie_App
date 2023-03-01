// import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CARD_IMG } from "../config";

export default function WatchList() {
    const { WatchList } = useSelector((state) => state);
    // console.log(WatchList);
    const list = WatchList.map((media) => (
        <Link to={`/details/${media.id}`}>
            <div className="p-5 transform transition duration-500 hover:scale-110 hover:ease-in-out">
                <img src={`${CARD_IMG}${media?.poster_path}`} alt="poster" />
            </div>
        </Link>
    ));
    return (
        <div className="bg-black md:h-[89.3vh] px-5">
            <h1 className="text-white text-4xl font-semibold font-serif">My List</h1>
            <div className="grid grid-cols-4 gap-x-4">
                {list}
            </div>
        </div>

    );
}