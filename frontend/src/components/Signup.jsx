import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", { username, email, password });
            login(res.data);
            navigate("/");
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-900 px-6 overflow-hidden">
            {/* Animated SVG Background */}
            <svg className="absolute top-0 left-0 w-48 sm:w-56 md:w-72 h-38 sm:h-56 md:h-52 opacity-20 animate-float-slow" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="#4B5563" />
            </svg>

            <svg className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-60 md:h-66 opacity-20 animate-spin-slower" viewBox="0 0 100 100">
                <rect width="100" height="100" fill="#374151" rx="20" />
            </svg>

            <svg className="absolute top-1/4 right-1/4 sm:right-1/3 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 opacity-15 animate-pulse-float" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#6B7280" />
            </svg>

            {/* Signup Card */}
            <div className="relative w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 z-10">
                <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded-xl font-semibold shadow hover:from-gray-600 hover:to-gray-700 transition"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
