import logo from '../media/logo.png';
import avatar from '../media/avatar.png';
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <div className="flex justify-between items-center w-full bg-black z-10 md:py-5 md:px-4">
            <div className='flex flex-row items-center'>
                <img src={logo} alt="logo" className='w-40 md:w-[18%] mr-5' />
                <div className='text-gray-200 text-xl font-serif font-semibold hover:cursor-pointer'>
                    <ul>
                        <Link to='watchlist'><li>Watch List</li></Link>
                    </ul>
                </div>
            </div>
            <div className='float-right'>
                <img src={avatar} alt="avatar" className='float-right w-40 md:w-[17%]' />
            </div>
        </div>
    );
}