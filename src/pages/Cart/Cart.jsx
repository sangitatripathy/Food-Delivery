import React from "react";
import { useContext } from "react";
import { storeContext } from "../../contexts/storeContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromCart,getTotalAmount } = useContext(storeContext);

  const cartItems = food_list.filter((item) => cartItem[item._id] > 0);

  const navigate=useNavigate();

  return (
    <div className="w-[90%] mx-auto mt-10 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Column headings */}
          <div className="grid grid-cols-6 font-semibold text-gray-700 border-b pb-2 text-sm md:text-base">
            <p className="col-span-2">Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {/* Cart items */}
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-6 items-center gap-4 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-4 col-span-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded object-cover"
                />
                <p className="font-medium text-gray-800">{item.name}</p>
              </div>
              <p className="text-gray-700">${item.price}</p>
              <p className="text-gray-700">{cartItem[item._id]}</p>
              <p className="text-gray-800 font-semibold">
                ${item.price * cartItem[item._id]}
              </p>
              <button
                className="text-red-500 font-bold text-lg hover:text-red-700"
                onClick={() => removeFromCart(item._id)}
              >
                ×
              </button>
            </div>
          ))}

          {cartItems.length > 0 && (
            <div className="mt- relative ">
              <h2 className=" absolute text-xl font-bold text-gray-800 mb-2 ml-6">
                Cart Totals
              </h2>
              <div className="flex flex-col md:flex-row gap-8 justify-between">
                <div className="w-full md:w-1/2 rounded-lg p-6">
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-800 font-semibold">${getTotalAmount()}</p>
                  </div>
                  <hr />
                  <div className="flex justify-between my-4">
                    <p className="text-gray-700">Delivery Fee</p>
                    <p className="text-gray-800 font-semibold">${2}</p>
                  </div>
                  <hr />
                  <div className="flex justify-between mt-4 font-bold text-lg">
                    <p>Total</p>
                    <p>${getTotalAmount()+2}</p>
                  </div>
                  <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
                  onClick={()=>navigate('/placeorder')}>
                    PROCEED TO CHECKOUT
                  </button>
                </div>
                <div className="w-full md:w-1/2 bg-white rounded-lg p-6 ">
                  <p className="text-gray-700 mb-2">
                    If you have a promo code, enter it here:
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
