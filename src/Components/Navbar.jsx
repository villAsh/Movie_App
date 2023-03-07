import logo from '../media/logo.png';
import avatar from '../media/avatar.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className="flex justify-between items-center w-full bg-black z-10 py-5 px-4 ">
            <div className='flex flex-row items-center '>
                <Link to="/">
                    <img src={logo} alt="logo" className='w-40 md:w-[18] mr-5' />
                </Link>
                <div className='text-gray-200 text-xl font-serif font-semibold hover:cursor-pointer'>
                    <ul className='flex space-x-5'>
                        <Link to='movies' >
                            <li className='relative group'>
                                <span className='transition-all hover:text-white'>Movies</span>
                                <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
                            </li>
                        </Link>
                        <Link to='find'>
                            <li className='relative group'>
                                <span className='transition-all hover:text-white'>Search</span>
                                <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
                            </li>
                        </Link>
                        <Link to='watchlist'>
                            <li className='relative group'>
                                <span  className='transition-all hover:text-white'>Watch List</span>
                                <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className='float-right'>
                <img src={avatar} alt="avatar" className='float-right w-10 md:w-[17]' />
            </div>
        </div>
    );
}