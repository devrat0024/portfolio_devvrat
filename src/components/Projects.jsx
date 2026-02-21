import { motion } from "framer-motion";

const projects = [
    {
        title: "AI Image Generator",
        description: "A deep learning model capable of generating realistic images from text descriptions using stable diffusion techniques.",
        tags: ["Python", "PyTorch", "React"],
        link: "#"
    },
    {
        title: "Smart Chatbot",
        description: "An intelligent conversational agent powered by LLMs to provide customer support and automated assistance.",
        tags: ["LLM", "NLP", "FastAPI"],
        link: "#"
    },
    {
        title: "Predictive Analytics",
        description: "Machine learning system for predicting market trends and analyzing large datasets for actionable insights.",
        tags: ["Scikit-Learn", "Pandas", "AWS"],
        link: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section bg-white border-t-2 border-black">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-black font-bold uppercase tracking-wider border-b-2 border-black inline-block pb-1">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 text-black">Featured Projects</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card group border-2 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all"
                        >
                            <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors">{project.title}</h3>
                            <p className="text-gray-800 mb-6 text-sm leading-relaxed font-medium">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold px-2 py-1 bg-white rounded text-black border-2 border-black">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="text-black font-bold hover:text-gray-600 transition-colors flex items-center gap-2 decoration-2 underline underline-offset-4">
                                View Details <span>→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
