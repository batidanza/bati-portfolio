import React, { useState, useEffect } from "react";
import Sketch from "react-p5";
import audio from "../../../../../assets/solo-brillaba99.wav";
import { playAudio, stopAudio, requestAudioPermission } from '../helpers/AudioControls';
import { openFullscreen } from "../../../design/image-print/helpers/HandleImageUpload";
import Star from '../helpers/Star';

let sound;

const ParticleComponent = () => {
  const [audioPermission, setAudioPermission] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true); 
  const [stars, setStars] = useState([]); 

  useEffect(() => {
    sound = new Audio(audio);
    sound.loop = true;
    sound.load();
  }, []);

  const handleRequestAudioPermission = () => {
    requestAudioPermission(sound, setAudioPermission, () => stopAudio(sound, setAudioPlaying, setCursorVisible));
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(850, 650).parent(canvasParentRef);
    p5.frameRate(60);
  };

  const draw = (p5) => {
    p5.background(0);

    for (let star of stars) {
      star.update();
      star.show(p5);
    }

    if (!audioPlaying) {
      p5.stroke(255); 
      p5.strokeWeight(1); 
      p5.line(p5.width / 2, p5.height / 2, p5.mouseX, p5.mouseY); 

      if (p5.frameCount % 5 === 0) { 
        let newStar = new Star(p5.mouseX, p5.mouseY);
        setStars([...stars, newStar]);
      }
    }

    if (audioPlaying || !cursorVisible) {
      const centerX = p5.width / 2;
      const centerY = p5.height / 2;
      const numLines = 500;
      const angleIncrement = p5.TWO_PI / numLines;
      const maxLength = p5.dist(0, 0, centerX, centerY);
      let lineLength = (sound.currentTime / sound.duration) * maxLength;
      for (let i = 0; i < numLines; i++) {
        const angle = i * angleIncrement;
        const x = centerX + lineLength * p5.cos(angle);
        const y = centerY + lineLength * p5.sin(angle);
        p5.stroke(p5.random(255), p5.random(255), p5.random(255));
        p5.strokeWeight(p5.random(1, 3)); // Grosor aleatorio
        p5.line(centerX, centerY, x, y);
      }
    }

    if (!audioPlaying && p5.dist(p5.width / 2, p5.height / 2, p5.mouseX, p5.mouseY) < 50) {
      playAudio(sound, setAudioPlaying, setCursorVisible);
    } else if (audioPlaying && p5.dist(p5.width / 2, p5.height / 2, p5.mouseX, p5.mouseY) >= 50) {
      stopAudio(sound, setAudioPlaying, setCursorVisible);
    }
  };

  return (
    <div className="sketch">
      <div className="sketch-content">
        {audioPermission ? (
          <>
            <div>
              <button className="button-full-screan" onClick={openFullscreen}>FULLSCREEN</button>
            </div>

            <Sketch
              setup={setup}
              draw={draw}
              className="fluid-sketch"
            />
          </>
        ) : (
          <button className="button-permission" onClick={handleRequestAudioPermission}>ALLOW AUDIO</button>
        )}
      </div>
    </div>
  );
};

export default ParticleComponent;
