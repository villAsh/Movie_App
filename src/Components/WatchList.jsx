// import { useState } from "react";
import { useSelector } from "react-redux";
import { CARD_IMG } from "../config";

export default function WatchList() {
    const [WatchList] = useSelector((state) => state.WatchList);
    // console.log(WatchList);
    const list = WatchList.map((media) => {
        return <div>
            <img src={`${CARD_IMG}${media?.poster_path}`} alt="poster"/>
        </div>
    });
    return (
        <div className="bg-black md:h-[89.3vh] px-5">
            <h1 className="text-white text-4xl font-semibold font-serif">My List</h1>
            <div className="grid grid-cols-5 gap-x-4">
                {list}
            </div>
        </div>

    );
}