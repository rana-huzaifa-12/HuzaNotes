import React from "react";

const Footer = () => {
    return (
        <footer className="relative bg-gray-900 text-gray-100 py-8 border-t-2">
            <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 z-10">
                {/* App Name */}
                <h1 className="text-2xl font-bold text-gray-100">
                    HuzaNotes
                </h1>

                {/* Made by */}
                <p className="text-gray-300 text-center md:text-center">
                    Made with <span className="text-red-500">&hearts;</span> by <span className="font-semibold">Rana Huzaifa</span>
                </p>

                {/* Copyright */}
                <p className="text-gray-400 text-center md:text-right">
                    © {new Date().getFullYear()} HuzaNotes. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
