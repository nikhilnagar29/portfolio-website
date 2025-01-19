import React, { useEffect, useRef } from "react";
import BgVideo from "../video/BG-video.mp4";
import './CSS/video.css';

const DynamicVideo = ({ children }) => {
  const videoRef = useRef(null);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const currentScrollY = window.scrollY;
      const scrollSpeed = 1*Math.abs(2*currentScrollY - lastScrollY); // Calculate scroll speed
      lastScrollY = 2*currentScrollY;

      // Map scroll speed to playback rate
      const playbackRate = 1*Math.min(3, Math.max(0.75, 0.75 + scrollSpeed / 100));
      videoRef.current.playbackRate = playbackRate;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={BgVideo}
        type="video/mp4"
        autoPlay
        muted
        loop
      ></video>

      {/* Overlay Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DynamicVideo;
