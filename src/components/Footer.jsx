export default function Footer() {
    return (
        <footer className="py-8 bg-white border-t-2 border-black">
            <div className="container text-center">
                <h2 className="text-2xl font-bold text-black mb-4 inline-block tracking-tighter">
                    Devvrat.
                </h2>
                <div className="flex justify-center gap-6 mb-8 text-gray-600 font-medium">
                    <a href="#" className="hover:text-black transition-colors underline decoration-2 underline-offset-4">GitHub</a>
                    <a href="#" className="hover:text-black transition-colors underline decoration-2 underline-offset-4">LinkedIn</a>
                    <a href="#" className="hover:text-black transition-colors underline decoration-2 underline-offset-4">Twitter</a>
                </div>
                <p className="text-gray-500 text-sm font-medium">
                    &copy; {new Date().getFullYear()} Devvrat Shukla. Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
}
