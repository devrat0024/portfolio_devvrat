import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="section bg-white relative overflow-hidden border-t-2 border-black">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-black font-bold uppercase tracking-wider border-b-2 border-black inline-block pb-1">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black mt-4">Let's Work Together</h2>
                    <p className="text-gray-700 font-medium">Have a project in mind? detailed discussion? or just want to say hi?</p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-black mb-2">Name</label>
                            <input type="text" className="w-full bg-white border-2 border-black rounded p-3 text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-black mb-2">Email</label>
                            <input type="email" className="w-full bg-white border-2 border-black rounded p-3 text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-black mb-2">Message</label>
                        <textarea rows="4" className="w-full bg-white border-2 border-black rounded p-3 text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn px-10 py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">Send Message</button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
