import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import { carData } from '../assets/cardata';

const Booking = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();  

  // Amount calculation states
  const [days, setDays] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(""); // ✅ error state

  const [showPopup, setShowPopup] = useState(false); 

  useEffect(() => {
    const foundCar = carData.find(car => car.id === Number(id));
    setCar(foundCar);
  }, [id]);

  useEffect(() => {
    if (car) {
      if (days <= 0) {
        setError("⚠️ Please enter at least 1 day.");
        setTotal(0);
      } else {
        setError("");
        setTotal(car.price * days);
      }
    }
  }, [car, days]);

  if (!car) {
    return (
      <p className="text-center text-red-500 mt-10 text-lg">
        Car not found 🚗
      </p>
    );
  }

  return (
    <div className="flex items-center justify-center py-12 px-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-5xl w-full flex flex-col md:flex-row gap-10">
        
        {/* Left Side: Car Image */}
        <div className="flex-1 flex items-center justify-center">
          <img 
            src={car.image} 
            alt={car.name} 
            className="rounded-2xl shadow-lg w-full max-h-[450px] object-cover"
          />
        </div>

        {/* Right Side: Booking Details */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">{car.name}</h2>
          <p className="text-xl text-blue-600 font-bold mb-4">Price per Day: ${car.price}</p>

          <div className="text-gray-700 space-y-3 mb-6">
            <p><span className="font-semibold">Fuel Type:</span> {car.fuelType}</p>
            <p><span className="font-semibold">Seating Capacity:</span> {car.seatingCapacity}</p>
            <p><span className="font-semibold">Category:</span> {car.category}</p>
          </div>

          {/* Amount Calculator */}
          <div className="bg-gray-100 p-5 rounded-xl shadow-inner mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Number of Days
            </label>
            <input
              type="number"
              min="1"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* ✅ Show error if days <= 0 */}
            {error && (
              <p className="mt-2 text-red-500 font-medium">{error}</p>
            )}

            <p className="mt-4 text-2xl font-bold text-green-600">
              Total Amount: ${total}
            </p>
          </div>

          <button 
            onClick={() => days > 0 && setShowPopup(true)} // ✅ only allow popup if valid
            disabled={days <= 0} 
            className={`w-full px-6 py-3 rounded-xl shadow-md transition text-lg 
              ${days <= 0 
                ? "bg-gray-400 cursor-not-allowed text-white" 
                : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
          >
            Confirm Booking
          </button>
        </div>
      </div>

      {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">✅ Order Confirmed!</h2>
            <p className="text-lg mb-6">Enjoy the ride with <span className="font-bold text-blue-600">RideMax</span> 🚗</p>
            
            <button 
              onClick={() => navigate("/")}  
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
