import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleTheme } from '../redux/themeSlice';

const Navbar = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const toogle_icon = (mode) => {dispatch(toggleTheme(mode))}

  return (
    <div className={`bg-gray-800 text-white shadow-md ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-800 border-b-2 border-amber-500 text-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <img
          className="h-16"
          src="https://ridetothemax.com/wp-content/uploads/2025/01/5BF9BC7F-16C5-4797-90A2-AD86C453D9B3-removebg-preview.png"
          alt="Logo"
        />

        <nav>
          <ul className="flex align-items-baseline space-x-8 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-500 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-yellow-500 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/Cart" className="hover:text-yellow-500 transition-colors duration-300">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/CarList" className="hover:text-yellow-500 transition-colors duration-300">
                Car List
              </Link>
            </li>
            <div className='h-2 text-2xl cursor-pointer' >  {theme === "light" ? (
                <p
                  className="text-2xl rounded-2xl cursor-pointer "
                  onClick={() => toogle_icon("dark")}
                >
                  🌙
                </p>
              ) : (
                <p
                  className="text-2xl  cursor-pointer "
                  onClick={() => toogle_icon("light")}
                >
                  🔆
                </p>
              )}
            </div>
          </ul>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
