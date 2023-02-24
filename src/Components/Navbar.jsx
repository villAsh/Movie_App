import logo from '../media/logo.png';
import avatar from '../media/avatar.png';
export default function Navbar(){
    return(
        <div className="flex justify-between items-center w-screen bg-black bg-opacity-40 absolute z-10 md:py-7 md:px-4">
            <div>
                <img src={logo} alt="logo" className='w-40 md:w-[20%]' />
            </div>
            <div className='float-right'>
                <img src={avatar} alt="avatar" className='float-right w-40 md:w-[17%]' />
            </div>
        </div>
    );
}