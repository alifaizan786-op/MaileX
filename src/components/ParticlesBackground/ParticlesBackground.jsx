import React from 'react';
import '../rightsidebar/rightsidebar.css'
import particlesConfig from './particlesjs-config'
import Particles from "react-tsparticles";






function ParticlesBackground() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  );
};

export default ParticlesBackground;