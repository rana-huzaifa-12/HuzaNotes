import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100">HuzaNotes</span>
            </h1>
            <p className="text-center text-lg md:text-xl mb-8 max-w-xl">
                A secure and modern place to create, edit, and manage your personal notes.
                Only you can see your notes — safe, simple, and fast.
            </p>
            {!user && (
                <div className="flex space-x-4">

                    <Link
                        to="/signup"
                        className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded-lg font-semibold shadow hover:from-gray-600 hover:to-gray-700 transition"
                    >
                        Start With Huza Notes
                    </Link>
                </div>
            )}
            {user && (
                <div className="mt-6">
                    <Link
                        to="/notes"
                        className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded-lg font-semibold shadow hover:from-gray-600 hover:to-gray-700 transition"
                    >
                        Go to Your Notes
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Home;
