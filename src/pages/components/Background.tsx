import React from "react";
import ParticleBackground from "react-particle-backgrounds";

const settings = {
  canvas: {
    canvasFillSpace: true,
    useBouncyWalls: false,
  },
  particle: {
    particleCount: 30,
    color: "#ffffff",
    minSize: .1,
    maxSize: 3,
  },
  velocity: {
    directionAngle: 0,
    directionAngleVariance: 360,
    minSpeed: .1,
    maxSpeed: .5,
  },
  opacity: {
    minOpacity: 0,
    maxOpacity: 0.7,
    opacityTransitionTime: 15000,
  },
};

const Background = function () {
  return (
    <div className="absolute w-screen h-screen z-1">
      <ParticleBackground settings={settings} />
    </div>
  );
};

export default Background;
