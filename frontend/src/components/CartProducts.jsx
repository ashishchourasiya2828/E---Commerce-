import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  setSaveProducts,
  removeFromCart,
} from "../store/reducers/cartSlice";

const CartProducts = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex items-center justify-between p-4 bg-white shadow-sm border rounded-lg border-gray-300 mb-4 w-[600px] sm:w-full">
        {/* Product Image & Details */}
        <div className="flex items-center space-x-4">
          <img
            src={item.image}
            alt="Product"
            className="w-24 h-24 object-cover rounded"
          />
          <div className="min-w-[160px]">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.price}</p>
            <p className="text-sm text-green-600 font-medium">
              {item.inStock ? "In Stock" : "Out of Stock"}
            </p>

            {/* Options */}
            <div className="flex space-x-2 mt-2">
              <select className="border rounded px-2 py-1 text-sm">
                {item.sizes.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
              </select>
              <select className="border rounded px-2 py-1 text-sm">
                {item.colors.map((color, index) => (
                  <option key={index}>{color}</option>
                ))}
              </select>
              <div className="flex items-center border rounded">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  disabled={item.quantity <= 1}
                  className="px-2 py-1 text-sm"
                >
                  <i className="ri-subtract-line"></i>
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  disabled={item.quantity >= 10}
                  className="px-2 py-1 text-sm"
                >
                  <i className="ri-add-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="flex flex-col items-end gap-10">
          <p className="text-lg font-semibold">{item.price}</p>
          <div className="flex space-x-4 text-gray-500">
            {/* Save Button */}
            <button
              onClick={() => dispatch(setSaveProducts(item.id))}
              className={`hover:text-green-500 p-1 ${item.saved ? "text-green-500" : "text-gray-500"
                }`}
            >
              {item.saved ? (
                <>
                  <i className="ri-heart-fill"></i> Saved
                </>
              ) : (
                <>
                  <i className="ri-heart-line"></i> Save
                </>
              )}
            </button>

            {/* Delete Button */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="hover:text-red-500 p-1"
            >
              <i className="ri-delete-bin-6-line mr-1"></i>Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
