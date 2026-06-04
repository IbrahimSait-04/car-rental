import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Home = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div>
    <div className={theme=="light" ? "flex flex-col items-center justify-center text-center py-10 px-4 bg-gray-100 min-h-screen" :"flex flex-col items-center justify-center text-center py-10 px-4 bg-gray-800 min-h-screen"}>
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Welcome to Max Car Rental
        </h1>
        <p className="text-lg text-gray-700 mb-6 font-serif">
          Find the best cars available for rent @ Affordable Price.
        </p>
        <img
          src="https://wallpapercave.com/wp/wp8664414.jpg"
          alt="Car rental banner"
          className="rounded-xl shadow-lg max-w-8xl w-full h-auto object-cover"
        />
        <Link
          to="/CarList"
          className=" mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-md hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition transform duration-300"
        >
          Explore Cars
        </Link>

      </div>
    </div>
  );
};

export default Home;
