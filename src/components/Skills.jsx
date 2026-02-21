import { motion } from "framer-motion";

const skills = [
    "Python", "TensorFlow", "PyTorch", "Scikit-Learn",
    "OpenCV", "NLP", "LLMs", "Docker",
    "AWS", "React", "FastAPI", "SQL"
];

export default function Skills() {
    return (
        <section id="skills" className="section bg-white relative border-t-2 border-black">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="text-black font-bold uppercase tracking-wider border-b-2 border-black inline-block pb-1">My Stack</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 text-black">Technologies I Use</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="card text-center p-4 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default"
                        >
                            <span className="font-bold text-black">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
