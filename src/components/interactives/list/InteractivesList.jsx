import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SketchList.css";

import drawImagesVideo from "../../../assets/print-images-video.mp4";
import soloBrillabaSketchVideo from "../../../assets/solo-brillaba.mp4";
import audioParticlesSketchVideo from "../../../assets/fluid-sketch.mp4";
import sphereImageVideo from "../../../assets/sketch-ellipses-video.mp4";
import drawShapes from "../../../assets/draw-video.mp4";
import audioPatch from "../../../assets/audio-patch.mp4";
import fanVideo from "../../../assets/fan-video.mp4";
import horseVideo from "../../../assets/horse-sketch.mp4";

const InteractivesList = () => {
  const videosData = [
    {
      id: 1,
      src: drawImagesVideo,
      title: "PRINT IMAGES",
      path: "print-images",
    },
    {
      id: 2,
      src: soloBrillabaSketchVideo,
      title: "SOLO BRILLABA",
      path: "particle-component",
    },
    { id: 3, src: drawShapes, title: "DRAW SHAPE", path: "draw-shape" },
    {
      id: 4,
      src: audioParticlesSketchVideo,
      title: "FLUID SKETCH",
      path: "fluid-component",
    },
    {
      id: 5,
      src: sphereImageVideo,
      title: "SPHERE IMAGES",
      path: "image-circle",
    },
    { id: 6, src: fanVideo, title: "FAN SKETCH", path: "fan-sketch" },
    { id: 7, src: horseVideo, title: "IMAGE PARTICLE", path: "image-particle" },
    {
      id: 8,
      src: audioPatch,
      title: "AUDIO & IMAGES PATCH",
      path: "audio-visualizer",
    },
  ];

  const [videoLoading, setVideoLoading] = useState({});

  const handleVideoLoaded = (id) => {
    setVideoLoading((prevState) => ({ ...prevState, [id]: false }));
  };

  return (
    <div className="sketch-video-list">
      <h4 className="title"> INTERACTIVE SKETCHES </h4>
      <div className="sketch-containers">
        {videosData.map((video) => (
          <div key={video.id} className="sketch-video-container">
            <Link to={`/${video.path}`}>
              {videoLoading[video.id] ? (
                <div className="loading">Loading...</div>
              ) : null}
              <video
                src={video.src}
                autoPlay
                loop
                muted
                controls={false}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                style={{ display: videoLoading[video.id] ? "none" : "block" }}
                onLoadedData={() => handleVideoLoaded(video.id)}
              />
            </Link>
            <div className="video-title">{video.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractivesList;
