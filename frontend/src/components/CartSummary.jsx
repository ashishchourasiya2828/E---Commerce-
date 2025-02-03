import React from "react";

const CartSummary = () => {
  return (
    <div className=" bg-white">
      <h2 className="text-xl font-bold mb-6 text-center lg:text-left">Delivery</h2>

      {/* Delivery Options */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <button className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-100 font-medium hover:bg-gray-200">
          Free
        </button>
        <button className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-200">
          Express: $9.99
        </button>
      </div>

      {/* Delivery Date */}
      <p className="text-gray-500 text-sm font-medium text-center sm:text-left mb-6">
        <strong className="text-black">Delivery date:</strong> June 24, 2022
      </p>

      {/* Promocode Input */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Promocode"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 w-full sm:w-auto">
          Apply
        </button>
      </div>

      {/* Discount Info */}
      <p className="text-green-600 text-sm mb-6 text-center sm:text-left">20% off discount</p>

      {/* Price Breakdown */}
      <div className="border-t border-gray-300 pt-6">
        <div className="flex justify-between text-gray-700 mb-4">
          <span>Subtotal</span>
          <span>$80.96</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-4">
          <span>
            Discount <span className="text-gray-500 text-sm">(20%)</span>
          </span>
          <span>-$16.19</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-4">
          <span>
            Delivery <span className="text-gray-500 text-sm">&#9432;</span>
          </span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-4">
          <span>
            Tax <span className="text-gray-500 text-sm">&#9432;</span>
          </span>
          <span>+ $14.00</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between text-gray-900 font-semibold text-lg mt-6">
        <span>Total</span>
        <span>$78.76</span>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-4">
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600">
          Proceed to checkout
        </button>
        <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md font-medium hover:bg-gray-200">
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
