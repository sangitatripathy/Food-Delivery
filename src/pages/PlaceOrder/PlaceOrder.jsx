import React from "react";
import { useContext } from "react";
import { storeContext } from "../../contexts/storeContext";

const PlaceOrder = () => {
  const {getTotalAmount} =useContext(storeContext)
  const inputClass = "w-full px-4 py-2 border border-black-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400";

  return (
    <form className="mt-10 flex flex-row justify-around gap-8 px-4 items-start">
      <div className="  rounded-2xl px-4 py-4 shadow-md">
        <p className=" font-bold mb-4">Delivery Information</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="first name" className={inputClass} />
          <input type="text" placeholder="last name" className={inputClass} />
        </div>
        
          <input type="email" placeholder="address" className={`${inputClass} mb-4`} />
          <input type="text" placeholder="street" className={`${inputClass} mb-4`} />
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"> 
          <input type="text" placeholder="city" className={inputClass} />
          <input type="text" placeholder="state" className={inputClass} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="zipcode" className={inputClass} />
          <input type="text" placeholder="country" className={inputClass} />
        </div>
        <input type="text" placeholder="phone" className={`${inputClass} mb-4`} />
      </div>
      <div className="w-[40%]">
        <h2 className="font-bold" >
          Cart Totals
        </h2>
        <div className="flex flex-col gap-2">
          <div >
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr />
          <div>
            <p >Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div>
            <p>Total</p>
            <p>${getTotalAmount() + 2}</p>
          </div>
          <button className="bg-orange-400 rounded-3xl px-4 py-2 w-[38%]"         
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
