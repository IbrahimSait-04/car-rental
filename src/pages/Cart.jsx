import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart , clearcart} from '../redux/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value); // get cars from redux
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <p className="text-center text-red-500 mt-10 text-lg">
        Your Cart Is Empty{" "}
        <span className="text-blue-400">
          <Link to="/CarList">Continue Shopping</Link>
        </span>
      </p>
    );
  }

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold text-center mt-6 mb-8">Your Cart</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {cartItems.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{car.name}</h3>
            <p className="text-gray-600">
              <span className="font-medium">Fuel Type:</span> {car.fuelType}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Seating Capacity:</span>{" "}
              {car.seatingCapacity}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Category:</span> {car.category}
            </p>

            <Link to={`/${car.id}`}>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </Link>

            <button
              onClick={() => dispatch(removeFromCart(car))}
              className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => dispatch(clearcart())}
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
