import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="section bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-black font-bold uppercase tracking-wider border-b-2 border-black inline-block pb-1">About Me</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black mt-4">Who I Am</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="text-gray-800 space-y-5 text-lg font-medium leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                I am a passionate AI Engineer and Data Scientist dedicated to solving real-world problems through intelligent systems.
                                My journey began with a curiosity for how machines learn, which led me to specialize in Deep Learning and Computer Vision.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                With a strong foundation in Python and cloud technologies, I build scalable AI solutions that drive innovation.
                                I enjoy bridging the gap between theoretical research and practical application.
                            </motion.p>
                        </motion.div>
                        <div className="card bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                            <h3 className="text-xl font-bold mb-4 text-black border-b-2 border-black pb-2 inline-block">Quick Facts</h3>
                            <ul className="space-y-3 text-black font-medium">
                                <li className="flex items-center gap-2">
                                    <span className="text-black font-bold">▹</span> Based in India
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-black font-bold">▹</span> AI & ML Enthusiast
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-black font-bold">▹</span> Open Source Contributor
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-black font-bold">▹</span> Continuous Learner
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
