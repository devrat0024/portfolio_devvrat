import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="absolute w-full z-50 py-6"
        >
            <div className="container flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-black tracking-tighter">
                    Devvrat.
                </Link>
                <ul className="flex gap-8">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About", path: "/about" },
                        { name: "Skills", path: "/skills" },
                        { name: "Projects", path: "/projects" },
                        { name: "Contact", path: "/contact" },
                    ].map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`transition-colors font-medium relative group ${isActive(item.path) ? "text-black" : "text-gray-600 hover:text-black"
                                    }`}
                            >
                                {item.name}
                                {isActive(item.path) && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute left-0 top-full block h-[2px] w-full bg-black mt-1"
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}
