// components/ProductDetails.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultImage, increaseQuantity, decreaseQuantity } from "../store/reducers/productDetailsSlice";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { images, defaultImage, defaultColor, quantity } = useSelector((state) => state.productDetails);

    return (
        <div className="bg-white min-h-screen px-4 sm:px-8 lg:px-20 pt-20">
            {/* Breadcrumb */}
            <div className="container mx-auto text-sm sm:text-md font-medium text-gray-600 mb-6">
                <p>Electronics / Audio / Headphones / Shop Headphones by type / Airpods-Max</p>
            </div>

            {/* Product Section */}
            <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
                {/* Product Image */}
                <div className="flex flex-col items-center">
                    <img
                        src={defaultImage}
                        alt="Airpods Max"
                        className="h-[300px] sm:h-[400px] w-[80%] sm:w-[60%] shadow-lg border border-gray-300 rounded-xl"
                    />
                    <div className="flex gap-2 mt-4">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img.url}
                                alt={`Thumbnail ${index}`}
                                onClick={() => dispatch(setDefaultImage(img))}
                                className={`w-16 h-16 sm:w-24 sm:h-24 rounded-xl border-2 ${defaultImage === img.url ? "border-green-500 shadow-lg" : "border-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Airpods Max</h1>
                    <p className="text-sm sm:text-base font-medium text-gray-500 mt-2">
                        A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.
                    </p>
                    <div className="text-green-500 flex items-center mt-2">
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <span className="text-black ml-1">(121)</span>
                    </div>
                    <p className="text-lg font-bold mt-4">$549.00 or $99.99/month</p>
                    <p className="text-sm font-medium text-gray-500 mt-1">
                        Suggested payments with 6 months special financing
                    </p>

                    {/* Color Options */}
                    <div className="mt-6">
                        <p className="font-bold text-gray-800">Choose a Color</p>
                        <div className="flex gap-2 mt-2">
                            {images.map((img, index) => (
                                <span
                                    key={index}
                                    onClick={() => dispatch(setDefaultImage(img))}
                                    className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center`}
                                    style={{ backgroundColor: img.color }}
                                >
                                    {defaultColor === img.color && (
                                        <i className="ri-check-line text-white text-lg"></i>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quantity and Actions */}
                    <div className="flex w-full flex-col sm:flex-row sm:items-center gap-4 mt-6">
                        <div className="w-26 flex items-center border bg-gray-100 rounded-full">
                            <button
                                disabled={quantity <= 1}
                                className="px-2 py-1 font-semibold"
                                onClick={() => dispatch(decreaseQuantity())}
                            >
                                <i className="ri-subtract-line"></i>
                            </button>
                            <span className="px-4 font-semibold">{quantity}</span>
                            <button
                                disabled={quantity >= 7}
                                className="px-2 py-1 font-semibold"
                                onClick={() => dispatch(increaseQuantity())}
                            >
                                <i className="ri-add-line"></i>
                            </button>
                        </div>
                        <div>
                            <h4 className="text-gray-600 text-sm font-semibold w-full">
                                Only <span className="text-orange-500">12 Items</span> Left!
                            </h4>
                            <h4 className="text-gray-600 text-sm font-semibold w-full">
                                Don’t miss it
                            </h4>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <button className="bg-green-800 text-white px-10 font-semibold py-2 rounded-full hover:bg-green-700">
                            Buy Now
                        </button>
                        <button className="border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white px-7 py-2 rounded-full transition-all duration-300 font-semibold">
                            Add to Cart
                        </button>
                    </div>

                    {/* Delivery Details */}
                    <div className="mt-8 space-y-4">
                        <div className="flex gap-2">
                            <i className="ri-truck-line text-xl text-orange-500"></i>
                            <div>
                                <p className="text-sm sm:text-md font-medium">Free Delivery</p>
                                <span className="text-xs sm:text-sm font-medium text-gray-500 underline">
                                    Enter your postal code for delivery availability
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <i className="ri-wallet-line text-xl text-orange-500"></i>
                            <div>
                                <p className="text-sm sm:text-md font-medium">Return Delivery</p>
                                <span className="text-xs sm:text-sm font-medium text-gray-500">
                                    Free 30 days delivery returns. <span className="underline">Details</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetails;
