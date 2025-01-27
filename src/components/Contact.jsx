import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import github from '../assets/GitHub.png';
import linkedIn from '../assets/linkedIn.png'
import X_logo from '../assets/X_logo.jpg'
import resume from '../assets/Nikhil_Nagar_Resume.pdf'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Dynamically load the Spline Viewer Script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!form.name || !form.email || !form.message) {
      alert("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Portfolio-website",
          from_email: form.email,
          to_email: "nsquarepart1@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for reaching out! I will get back to you shortly.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 ">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Contact Form */}
                <div className="bg-white/70 p-8 mx-auto rounded-lg max-w-[500px] shadow-xl">
                {/* <div className="bg-white/70 p-8 mx-auto rounded-lg max-w-[500px] shadow-xl"> */}
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">Contact Me</h2>
                        <div className="flex justify-end space-x-3">
                        <a
                            href="https://github.com/nikhilnagar29"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <img
                            src={github}
                            alt="GitHub"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-transform duration-200 ease-in-out hover:scale-125"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nikhil-nagar-99b40b26b"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img
                            src={linkedIn}
                            alt="LinkedIn"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-transform duration-200 ease-in-out hover:scale-125"
                            />
                        </a>
                        <a
                            href="https://x.com/nikhilnagar29"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter/X"
                        >
                            <img
                            src={X_logo}
                            alt="Twitter/X"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-transform duration-200 ease-in-out hover:scale-125"
                            />
                        </a>
                        </div>
                    </div>
                {/* </div> */}


                    <p className="text-base text-gray-600 mb-4">
                        Got a question or proposal, or just want to say hello? Fill out the form and I’ll get back to you as soon as possible.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <label className="flex flex-col">
                            <span className="text-gray-700 font-medium mb-1">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="border border-gray-300 rounded-md py-3 px-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-gray-700 font-medium mb-1">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="border border-gray-300 rounded-md py-3 px-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-gray-700 font-medium mb-1">Your Message</span>
                            <textarea
                                rows={6}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write your message"
                                className="border border-gray-300  rounded-md py-3 h-20 px-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </label>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 rounded-full px-6 mt-4 font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
                <div className="flex items-center justify-center min-h-screen">
                    <a
                      href={resume} // Ensure the file is accessible from the public route
                      download="Nikhil-Nagar-Resume.pdf" // Renames the file to Resume.pdf on download
                      className="px-6 py-3 bg-black/90 text-white font-bold text-lg rounded-lg shadow-md hover:bg-black/70 hover:shadow-lg active:scale-95 transition-transform duration-150 ease-in-out"
                    >
                      Download My Resume
                    </a>
                </div>

      </div>
    </div>
  );
};

export default Contact;


