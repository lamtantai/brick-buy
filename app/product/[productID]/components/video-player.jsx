"use client";

import React, { useRef, useState } from "react";

import { CiPause1, CiPlay1 } from "react-icons/ci";

export default function VideoPlayer({ src }) {
  const video = useRef();

  const [isPlaying, setIsPlaying] = useState(true);

  function playPause() {
    if (video.current.paused) {
      video.current.play();
      setIsPlaying(true);
    } else {
      video.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className="relative w-full bg-card">
      <video ref={video} autoPlay loop muted className="w-full" src={src} />

      <button
        className="btn-custom-shape absolute right-sm top-sm p-2 text-3xl mix-blend-difference"
        onClick={playPause}
      >
        {isPlaying ? <CiPause1 /> : <CiPlay1 />}
      </button>
    </div>
  );
}
