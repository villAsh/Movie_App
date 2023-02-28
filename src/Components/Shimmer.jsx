import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Shimmer() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="px-20 bg-black">
                <div className="text-center font-sans pt-5" >
                    {/* <h1 className="text-5xl font-serif font-bold  pb-5 text-white">{SingleData?.name || SingleData?.title}</h1> */}
                    <Skeleton width={300} height={40}/>
                    {/* <img
                        src={`${ORIGINAL_IMG}${SingleData.backdrop_path}`}
                        alt="poster"
                        className="w-[100vw] mx-auto "
                        style={{
                            boxShadow: '13px -10px 36px 15px rgba(0,0,0,0.86) inset',
                        }}
                    /> */}
                    <Skeleton width={1100} height={700}/>
                </div>
                <div className="space-x-2 mt-5">
                    {/* <button
                        className="py-1 px-7 rounded bg-white font-bold
                    hover:bg-slate-500 hover:bg-opacity-30 
                    hover:text-white hover:delay-100
                ">
                        <span>Play</span>
                    </button> */}
                    <Skeleton width={80} height={30} inline={true}/>
                    <Skeleton width={100} height={30} inline={true}/>
                    {/* <button
                        className="py-1 px-7 rounded bg-white font-bold
                  hover:bg-slate-500 hover:bg-opacity-30 
                  hover:text-white hover:delay-100 
                  ">
                        <span>Add To List</span>
                    </button> */}
                </div>
                <div className="flex flex-col justify-center text-gray-200 space-y-3 mt-5">
                    <Skeleton width={700} height={25} />
                    <Skeleton width={500} height={25} />
                    <Skeleton width={1100} height={100} />
                    <Skeleton width={300} height={25} count={2}/>
                    {/* <h5 className="text-2xl font-serif font-bold py-5 "><span>Tagline : </span>{SingleData?.tagline ? SingleData?.tagline : "Not provided"}</h5>
                    <h5 className="text-2xl font-serif font-bold"><span>Genre : </span>{SingleData?.genres?.map((genre) => <span key={genre.id}>{genre.name} , </span>)}</h5>
                    <p className="text-xl font-serif font-bold text-justify pt-3"><span className="text-2xl">Plot : </span>{SingleData?.overview}</p>
                    <h5 className="text-2xl font-serif font-bold pt-3"><span>Number of Seasons : </span>{SingleData?.number_of_seasons}</h5>
                    <h5 className="text-2xl font-serif font-bold pt-3"><span>Number of Episodes : </span>{SingleData?.number_of_episodes}</h5> */}
                </div>
                <div className=" mt-5 mx-auto">
                    <Skeleton width={600} height={200} className="mx-auto"/>
                    {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${VideoData?.key}`} className="mx-auto border-2 border-white" /> */}
                    
                </div>
            </div>
        </SkeletonTheme>
    );
}