import React, { useState } from "react";
import mychessVideo from "../video/MyChess-video.mp4";
import whiteBoardVideo from "../video/LiveWhiteboard-video.mp4";
import socioGramVideo from "../video/SocioGram-video.mp4";

import "./CSS/project.css";

const ProjectCards = () => {
  const [transformStyle, setTransformStyle] = useState({});

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

  const projects = [
    {
      title: "My Chess",
      description: "A real-time chess game with cross-device connectivity.",
      technologies: "Node.js, Socket.io, chess.js, express",
      video: mychessVideo,
      link: "/mychess",
    },
    {
      title: "Sociogram",
      description: "A social media platform for sharing posts and following users.",
      technologies: "Express.js, MongoDB, NodeMailer, Cookie-parser, Multer, Twilio",
      video: socioGramVideo,
      link: "/sociogram",
    },
    {
      title: "Live Whiteboard",
      description: "A collaborative drawing tool with real-time updates.",
      technologies: "Rough.js, React, Tailwind CSS, Socket.io",
      video: whiteBoardVideo,
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
                <a
                href={project.link}
                key={index}>
                    <div
                        key={index}
                        className="video-container  max-w-[400px] rounded-lg shadow-lg bg-white/60 mx-auto"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        style={transformStyle[index]}
                    >
                        <video
                        className="w-full rounded-md"
                        autoPlay
                        loop
                        muted
                        src={project.video}
                        ></video>
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
