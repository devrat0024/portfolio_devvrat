import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
    const [textIndex, setTextIndex] = useState(0);
    const roles = ["AI Engineer", "Data Scientist", "ML Developer", "Open Source Enthusiast"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        const audio = document.getElementById("hero-audio");
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
            <audio id="hero-audio" loop>
                <source src="/background-audio.mp4" type="audio/mp4" />
            </audio>

            <div className="container relative h-full flex items-center">
                <div className="absolute top-10 right-0 z-50">
                    <button
                        onClick={toggleAudio}
                        className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 relative group bg-white"
                    >
                        {isPlaying ? (
                            <div className="flex gap-1">
                                <motion.div
                                    animate={{ height: [4, 16, 4] }}
                                    transition={{ repeat: Infinity, duration: 0.5 }}
                                    className="w-1 bg-current"
                                />
                                <motion.div
                                    animate={{ height: [8, 20, 8] }}
                                    transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }}
                                    className="w-1 bg-current"
                                />
                                <motion.div
                                    animate={{ height: [4, 16, 4] }}
                                    transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }}
                                    className="w-1 bg-current"
                                />
                            </div>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left z-10"
                    >
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tighter uppercase leading-tight">
                            Professional <br />
                            AI Solutions <br />
                            <span className="text-gray-500">Developer</span>
                        </motion.h1>

                        <div className="h-12 md:h-16 mb-8 overflow-hidden">
                            <motion.h2
                                key={textIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-lg md:text-xl text-gray-600 font-medium tracking-widest uppercase"
                            >
                                {roles[textIndex]}
                            </motion.h2>
                        </div>

                        <motion.p variants={itemVariants} className="max-w-md text-gray-600 text-lg mb-10 leading-relaxed">
                            Building intelligent systems that bridge the gap between complex data and actionable insights.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-5">
                            <a href="#projects" className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-10 rounded-full border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-all uppercase text-[10px] md:text-sm tracking-widest whitespace-nowrap flex-shrink-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                View Projects
                            </a>
                            <a href="#contact" className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-10 rounded-full border-2 border-black text-black bg-white font-bold hover:bg-black hover:text-white transition-all uppercase text-[10px] md:text-sm tracking-widest whitespace-nowrap flex-shrink-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Contact Me
                            </a>
                            <a
                                href="/resume.pdf"
                                download="Devvrat_Shukla_Resume.pdf"
                                className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-10 rounded-full border-2 border-gray-300 text-gray-600 font-bold hover:border-black hover:text-black transition-all uppercase text-[10px] md:text-sm tracking-widest gap-3 whitespace-nowrap flex-shrink-0 hover:bg-gray-50 transform hover:-translate-y-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 9.75V17.25m0 0L8.25 13.5m3.75 3.75 3.75-3.75M12 1.5V17.25" />
                                </svg>
                                Resume
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Image/Visual */}
                    <div className="relative h-[450px] hidden md:block group overflow-hidden rounded-lg shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-white/30 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                        >
                            <source src="/background-audio.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
