import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
export default function Find() {
    const [title, setTitle] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
        // console.log(title);
    }

    const handleClick = () => {
        console.log(title);
    }
    return (
        <div className="bg-black md:min-h-[90.5vh] px-5">
            <div className="text-white pt-5 flex justify-between items-center">
                <h1 className="text-4xl font-body font-semibold">Search Now</h1>
                <div className='flex items-center justify-center space-x-3'>
                    <div className="md:mt-3 flex items-center justify-between bg-white text-black caret-red-500 hover:outline hover:outline-2 hover:outline-red-500 px-4 py-1 rounded-md">
                        <BsSearch className='text-xl' />
                        <input type="text" value={title} onChange={handleChange} className="pl-2 outline-none" />
                    </div>
                    <button onClick={handleClick}
                    className='md:mt-3 transition-all duration-200 border border-red px-6 py-1 rounded-lg bg-white text-black hover:bg-red hover:text-white font-body'>
                        Search
                    </button>
                </div>

            </div>
        </div>
    );
}