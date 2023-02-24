import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchVideoData,fetchData } from "../Features/InfoSlice";
import { useParams } from "react-router-dom";
export default function SingleContent(){
    const { VideoData,SingleData} = useSelector((state) => state.info);
    const params = useParams();
    const dispatch = useDispatch();
    console.log("Video...",VideoData);
    console.log("data...",SingleData)
    // console.log("Params...",params)
    useEffect(() => {
        dispatch(fetchVideoData(params.id));
        dispatch(fetchData(params.id));
    },[]);
    return(
        <div className="top-44 md:top-28 relative">
            <h1>This is single content page</h1>
        </div>
        
    );
}
