import { BsSearch } from 'react-icons/bs'
export default function Find() {
    return (
        <div className="bg-black md:min-h-[90.5vh] px-5">
            <div className="text-white pt-5 flex justify-between items-center">
                <h1 className="text-3xl font-serif font-semibold">Search Now</h1>
                <div className="flex items-center bg-white text-black caret-red-500 hover:outline hover:outline-2 hover:outline-red-500 px-4 py-1 rounded-md">
                    <BsSearch className='text-xl'/>
                    <input type="text" className="pl-2 outline-none"/>
                </div>
            </div>
        </div>
    );
}