import ReactPlayer from "react-player/lazy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoData, fetchData, removeData } from "../Features/InfoSlice";
import { useParams } from "react-router-dom";
import { ORIGINAL_IMG } from "../config";
import Shimmer from "./Shimmer";
import { addToList } from "../Features/ListSlice";
export default function SingleContent() {
    const { VideoData } = useSelector((state) => state.info);
    const { SingleData } = useSelector((state) => state.info);
    
    const { id } = useParams();
    const dispatch = useDispatch();
    console.log("Video...", VideoData);
    console.log("data...", SingleData)

    useEffect(() => {
      
        setTimeout(() => {
            dispatch(fetchVideoData(id));
            dispatch(fetchData(id));
        }, 2000);
       

        return () => {
            dispatch(removeData());
        }
    }, []);
    const handleClick = (media) =>{
        dispatch(addToList(media));
    }
    return SingleData.length !== 0 ? (
        <div className="px-20 bg-black pb-10">
            <div className="text-center font-sans pt-5" >
                <h1 className="text-5xl font-serif font-bold  pb-5 text-white">{SingleData?.name || SingleData?.title}</h1>
                <img 
                    src={`${ORIGINAL_IMG}${SingleData.backdrop_path}`} 
                    alt="poster" 
                    className="w-[100vw] mx-auto " 
                    style={{
                        boxShadow : '13px -10px 36px 15px rgba(0,0,0,0.86) inset',
                    }}
                />
            </div>
            <div className="space-x-2 mt-5">
                <button 
                className="py-1 px-7 rounded bg-white font-bold
                    hover:bg-slate-500 hover:bg-opacity-30 
                    hover:text-white hover:delay-100
                ">
                    <span>Play</span>
                </button>
                <button onClick={() => handleClick(SingleData)}
                className="py-1 px-7 rounded bg-white font-bold
                  hover:bg-slate-500 hover:bg-opacity-30 
                  hover:text-white hover:delay-100 
                  ">
                    <span>Add To List</span>
                </button>
            </div>
            <div className="flex flex-col justify-center text-gray-200">
                <h5 className="text-2xl font-serif font-bold py-5 "><span>Tagline : </span>{SingleData?.tagline ? SingleData?.tagline : "Not provided"}</h5>
                <h5 className="text-2xl font-serif font-bold"><span>Genre : </span>{SingleData?.genres?.map((genre) => <span key={genre.id}>{genre.name} , </span>)}</h5>
                <p className="text-xl font-serif font-bold text-justify pt-3"><span className="text-2xl">Plot : </span>{SingleData?.overview}</p>   
                <h5 className="text-2xl font-serif font-bold pt-3"><span>Number of Seasons : </span>{SingleData?.number_of_seasons}</h5>    
                <h5 className="text-2xl font-serif font-bold pt-3"><span>Number of Episodes : </span>{SingleData?.number_of_episodes}</h5>    
            </div>
            <div className=" mt-5">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${VideoData?.key}`} className="mx-auto border-2 border-white" />
            </div>
        </div>

    ) : (
        <Shimmer />
    );
}
