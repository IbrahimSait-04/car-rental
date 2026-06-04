import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { carData } from "../assets/cardata";

const CarList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCars, setFilteredCars] = useState(carData);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const theme = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (car) => {
    dispatch(addToCart(car));
    console.log(`${car.name} added to cart ✅`);
  };

  useEffect(() => {
    const uniqueCategories = ["All", ...new Set(carData.map((car) => car.category))];
    setCategories(uniqueCategories);

    let cars = carData.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== "All") {
      cars = cars.filter((car) => car.category === selectedCategory);
    }


    if (minPrice) {
      cars = cars.filter((car) => car.price >= parseInt(minPrice));
    }

    if (maxPrice) {
      cars = cars.filter((car) => car.price <= parseInt(maxPrice));
    }
    setFilteredCars(cars);

  }, [searchTerm, selectedCategory, minPrice, maxPrice]);
  console.log(carData);


  return (
    <div className={theme=== "light" ? "p-6 bg-gray-50 min-h-screen" : "p-6 bg-gray-800 min-h-screen"}>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 
                bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-blue-800 tracking-wide hover:text-blue-600 transition duration-300">
          Car Lists
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-xl shadow-sm
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none
               hover:border-blue-400 transition duration-200"
        />

        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-32 px-4 py-2 rounded-xl border border-gray-300 bg-white 
               text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 
               focus:border-blue-500 focus:outline-none transition duration-200 
               placeholder-gray-400 hover:border-blue-400"
          />

          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-32 px-4 py-2 rounded-xl border border-gray-300 bg-white 
               text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 
               focus:border-blue-500 focus:outline-none transition duration-200 
               placeholder-gray-400 hover:border-blue-400"
          />
        </div>


        {/* Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 
               shadow-sm hover:border-blue-400 hover:shadow-md focus:outline-none 
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition 
               duration-200 cursor-pointer"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat} className="text-gray-700">
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-fit"
            >
              <img
                className="w-full h-80 object-cover"
                src={car.image}
                alt={car.name}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                <p className="text-sm text-gray-600">Seats: {car.seatingCapacity}</p>
                <p className="text-sm text-gray-600">Fuel: {car.fuelType}</p>
                <p className="text-sm text-gray-600">₹{car.price} / day</p>

                <button
                  onClick={() => navigate(`/${car.id}`)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  Rent Now
                </button>
                <button
                  onClick={() => handleAddToCart(car)}
                  className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 col-span-full">
            🚗 No cars found matching "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
};

export default CarList;
