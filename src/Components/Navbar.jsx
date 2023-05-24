import logo from "../media/logo.png";
import avatar from "../media/avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = ({ setNav }) => {
  return (
    <div className="md:hidden h-screen w-full bg-black text-white text-2xl transform ">
      <div>
        <ul
          className={`flex-col flex items-center justify-center space-y-5 pt-5 font-body font-extrabold`}
        >
          <Link to="movies" onClick={(nav) => setNav(!nav)}>
            <li className="relative group">
              <span className="transition-all hover:text-white">Movies</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-red transition-all group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="find" onClick={(nav) => setNav(!nav)}>
            <li className="relative group">
              <span className="transition-all hover:text-white">Search</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-red transition-all group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="watchlist" onClick={(nav) => setNav(!nav)}>
            <li className="relative group">
              <span className="transition-all hover:text-white">
                Watch List
              </span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-red transition-all group-hover:w-full"></span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center flex-wrap w-full bg-black z-10 py-5 px-4 ">
        <div className="flex flex-row items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-40 md:w-[18] mr-5" />
          </Link>
          <div
            className={`hidden md:flex md:items-center text-gray-200 text-2xl font-body font-semibold hover:cursor-pointer w-full md:w-auto`}
          >
            <ul
              className={`md:flex items-center justify-center sm:space-x-3 md:space-x-7 md:ml-3 w-full`}
            >
              <Link to="movies">
                <li className="relative group">
                  <span className="transition-all hover:text-white">
                    Movies
                  </span>
                  <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-red transition-all group-hover:w-full"></span>
                </li>
              </Link>
              <Link to="find">
                <li className="relative group">
                  <span className="transition-all hover:text-white">
                    Search
                  </span>
                  <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-red transition-all group-hover:w-full"></span>
                </li>
              </Link>
              <Link to="watchlist">
                <li className="relative group">
                  <span className="transition-all hover:text-white">
                    Watch List
                  </span>
                  <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-red transition-all group-hover:w-full"></span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <button onClick={() => setNav(!nav)}>
          <img
            src={avatar}
            alt="avatar"
            className="float-right w-10 md:w-[17]"
          />
        </button>
      </div>
      {nav && <Nav setNav={setNav} />}
    </>
  );
}
