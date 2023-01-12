import { React, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import styled from "styled-components";

function GlobalBackground() {
  return (
    <Suspense fallback={null}>
      <Background>
        <Canvas
          camera={{ position: [0, 10, 50] }}
          style={{ backgroundColor: "rgb(18, 31, 48)" }}
        >
          <Stars
            radius={200}
            depth={100}
            count={8000}
            factor={15}
            saturation={1}
            fade
            speed={2}
          />
          <ambientLight intensity={0.1} />
          <SunLight position={4} intensity={7} />
          <EffectComposer multisampling={8}>
            <Bloom
              kernelSize={3}
              luminanceThreshold={0.6}
              luminanceSmoothing={0.4}
              intensity={0.2}
            />
          </EffectComposer>
        </Canvas>
      </Background>
    </Suspense>
  );
}

const Background = styled.div`
  top: 0;
  position: fixed;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  text-align: center;
  z-index: 0;
`;

function SunLight(props) {
  const { position, intensity } = props;
  return (
    <>
      <pointLight position={[0, position, 0]} intensity={intensity} />
      <pointLight position={[0, -position, 0]} intensity={intensity} />
      <pointLight position={[position, 0, 0]} intensity={intensity} />
      <pointLight position={[-position, 0, 0]} intensity={intensity} />
      <pointLight position={[0, 0, position]} intensity={intensity} />
      <pointLight position={[0, 0, -position]} intensity={intensity} />
    </>
  );
}

export default GlobalBackground;
