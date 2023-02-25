import ReactPlayer from "react-player/lazy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoData, fetchData } from "../Features/InfoSlice";
import { useParams } from "react-router-dom";
import { CARD_IMG } from "../config";
export default function SingleContent() {
    const { key } = useSelector((state) => state.info.VideoData);
    const { SingleData } = useSelector((state) => state.info);
    const { id } = useParams();
    const dispatch = useDispatch();
    console.log("Video...", key);
    console.log("data...", SingleData)

    useEffect(() => {
        dispatch(fetchVideoData(id));
        dispatch(fetchData(id));
    }, []);

    return (
        <div className="mx-20 bg-slate-300 bg-opacity-30">
            <div className="text-center font-sans pt-5">
                <h1 className="text-5xl font-serif font-bold  pb-5">{SingleData?.name || SingleData?.title}</h1>
                <img src={`${CARD_IMG}${SingleData.poster_path}`} alt="poster" className="h-[70vh] mx-auto" />
            </div>
            <div className="flex flex-col items-center">
                <h5 className="text-2xl font-serif font-bold py-5 "><span>Tagline : </span>{SingleData?.tagline}</h5>
                <h5 className="text-2xl font-serif font-bold py-5 "><span>Genre : </span>{SingleData?.genres?.map((genre) => <span key={genre.id}>{genre.name} , </span>)}</h5>
            </div>
            <div>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${key}`} />
            </div>
        </div>

    );
}
