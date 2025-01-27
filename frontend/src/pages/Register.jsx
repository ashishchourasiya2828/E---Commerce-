import { useState } from "react"; 
import { Link } from "react-router-dom";

const Register = () => {
    const [registerData, setRegisterData] = useState({ firstname: "", lastname: "", email: "", password: "" });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(registerData)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 md:px-8 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-3xl shadow-lg rounded-lg overflow-hidden">
                {/* Sign Up Section */}
                <div className="bg-white p-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">Sign Up</h2>

                    <div className="flex justify-center space-x-4 mt-4">
                        <button className="px-3 py-2 rounded-full border border-gray-400 hover:bg-[#150239] hover:text-white transition-all duration-300">
                            <i className="ri-facebook-fill text-2xl"></i>
                        </button>
                        <button className="px-3 py-2 rounded-full border border-gray-400 hover:bg-[#150239] hover:text-white transition-all duration-300">
                            <i className="ri-google-fill text-2xl"></i>
                        </button>
                        <button className="px-3 py-2 rounded-full border border-gray-400 hover:bg-[#150239] hover:text-white transition-all duration-300">
                            <i className="ri-linkedin-fill text-2xl"></i>
                        </button>
                    </div>

                    <p className="text-gray-500 text-lg text-center mt-2">Create your account:</p>

                    <form onSubmit={handleRegister} className="mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <input
                                    onChange={handleOnChange}
                                    value={registerData.firstname}
                                    name="firstname"
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#150239]"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    onChange={handleOnChange}
                                    value={registerData.lastname}
                                    name="lastname"
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#150239]"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <input
                                onChange={handleOnChange}
                                value={registerData.email}
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#150239]"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                onChange={handleOnChange}
                                value={registerData.password}
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#150239]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#150239] text-white py-2 rounded-lg hover:opacity-90 mt-3"
                        >
                            SIGN UP
                        </button>
                    </form>
                </div>

                {/* Sign In Section */}
                <div
                    className="flex flex-col items-center justify-center bg-cover bg-top text-white p-8"
                    style={{ backgroundImage: "url('https://i.pinimg.com/736x/8f/30/a2/8f30a29f719661001a01ac4cb9acf521.jpg')" }}
                >
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold">Welcome Back!</h2>
                        <p className="mt-4 mb-8">To keep connected with us, please log in to your account</p>

                        <Link
                            to={"/login"}
                            className="bg-white text-[#150239] font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-200"
                        >
                            SIGN IN
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
