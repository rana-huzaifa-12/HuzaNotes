import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="flex justify-between items-center bg-gray-900 text-gray-100 px-6 py-4 sticky top-0 z-50">
            <div className="text-2xl font-semibold">HuzaNotes</div>
            <div className="space-x-4 flex items-center">
                {user ? (
                    <>
                        <span className="px-3 py-1 bg-gray-800 text-gray-100 rounded-full font-medium shadow-sm">
                            {user.username}
                        </span>
                        <button
                            onClick={logout}
                            className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded-lg font-medium shadow hover:from-gray-600 hover:to-gray-700 transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded-lg font-medium shadow hover:from-gray-600 hover:to-gray-700 transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded-lg font-medium shadow hover:from-gray-600 hover:to-gray-700 transition"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
