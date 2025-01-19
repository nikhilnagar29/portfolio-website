import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-300 py-5">
            <div className="container mx-auto px-4">
                

                {/* Footer Bottom */}
                <div className="mt-1 text-center">
                    <p>© {new Date().getFullYear()} Nikhil Nagar. All rights reserved.</p>
                    <p className="text-sm mt-2">
                        Built with ❤️ by Nikhil Nagar using React.js and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
