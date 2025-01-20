import React, { useState, useEffect } from "react";
import mychessVideo from "../video/mychess.mp4";
import whiteBoardVideo from "../video/live-whiteboard.mp4";
import socioGramVideo from "../video/sociogram.mp4";
import mychessImage from "../video/mychess.jpeg"; // Replace with actual image paths
import whiteBoardImage from "../video/whiteboard.jpeg";
import socioGramImage from "../video/sociogram.jpeg";
import "./CSS/project.css";

const ProjectCards = () => {
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [transformStyle, setTransformStyle] = useState({}); // Define state for transform styles

  const handleMouseMove = (e, index) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();

    // Calculate mouse position relative to the container
    const x = 5 * ((e.clientX - rect.left) / rect.width - 0.5) * 10; // Smaller motion
    const y = 2 * ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    // Apply transform style
    const style = {
      transform: `scale(1.15) translate(${x}px, ${y}px)`,
    };

    setTransformStyle((prev) => ({ ...prev, [index]: style }));
  };


  const handleMouseLeave = (index) => {
    setTransformStyle((prev) => ({ ...prev, [index]: {} }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleVideos((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const videoContainers = document.querySelectorAll(".video-container");
    videoContainers.forEach((container, index) => {
      container.dataset.index = index;
      observer.observe(container);
    });

    return () => {
      videoContainers.forEach((container) => observer.unobserve(container));
    };
  }, []);

  const projects = [
    {
      title: "My Chess",
      description: "A real-time chess game with cross-device connectivity.",
      technologies: "Node.js, Socket.io, chess.js, express",
      video: mychessVideo,
      image: mychessImage,
      link: "/mychess",
    },
    {
      title: "Sociogram",
      description: "A social media platform for sharing posts and following users.",
      technologies: "Express.js, MongoDB, NodeMailer, Cookie-parser, Multer, Twilio",
      video: socioGramVideo,
      image: socioGramImage,
      link: "/sociogram",
    },
    {
      title: "Live Whiteboard",
      description: "A collaborative drawing tool with real-time updates.",
      technologies: "Rough.js, React, Tailwind CSS, Socket.io",
      video: whiteBoardVideo,
      image: whiteBoardImage,
      link: "/livewhiteboard",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-6xl text-center md:text-left">
        <div className="mb-8">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">My Projects</h3>
          <p className="mb-4">
            The following projects demonstrate my skills and experience through practical,
            real-world examples of my work. Each project includes a brief description, along with
            links to code repositories and live demos. These projects highlight my ability to
            tackle complex challenges, work proficiently with diverse technologies, and manage
            projects efficiently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a href={project.link} key={index}>
                <div
                  className="video-container max-w-[400px] rounded-lg shadow-lg bg-white/60 mx-auto"
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={transformStyle[index]} // Apply dynamic styles
                >
                  {visibleVideos.includes(String(index)) ? (
                    <video
                      className="w-full rounded-md"
                      autoPlay
                      loop
                      muted
                      preload="metadata"
                      src={project.video}
                    ></video>
                  ) : (
                    <img
                      className="w-full rounded-md"
                      src={project.image}
                      alt={`${project.title} Placeholder`}
                      loading="lazy"
                    />
                  )}
                  <div className="p-3">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-base md:text-lg">{project.description}</p>
                    <p className="mt-2 text-sm text-gray-500">{project.technologies}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
