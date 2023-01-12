/* eslint-disable prettier/prettier */
import React, { forwardRef, useLayoutEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Float, Stars, Sphere } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

/** 
 * This function render the solor system displaying in the Scene component.
 * It contains a Canvas for 3d rendering, Stars for the background, lighting, and the Planets
 */
function ProfileScene() {
  return (
    <>
      <Canvas shadows camera={{ position: [-0.5, 1, 2.5] }} style={{ backgroundColor: "rgb(18, 31, 48)" }}>
        <Float scale={0.75} position={[-1, 0.6, 0.4]} rotation={[0, 0.8, 0]}>
          <Ship />
        </Float>
        <ambientLight intensity={0.2} />
        <directionalLight position={[-10, 0, -5]} intensity={1} color="red" />
        <directionalLight position={[-1, -2, -5]} intensity={0.2} color="#0c8cbf" />
        <spotLight position={[5, 0, 5]} intensity={2.5} penumbra={1} angle={0.35} castShadow color="#0c8cbf" />
        <Stars radius={200} depth={100} count={8000} factor={15} saturation={1} fade speed={2} />
        <Planet position={[25, 0, -25]} size={50} color={"orange"} radius={0} speed={1} rotationSpeed={0.2} name={"Sun"} />
        <EffectComposer multisampling={8}>
          <Bloom kernelSize={3} luminanceThreshold={0.6} luminanceSmoothing={0.4} intensity={0.2} />
        </EffectComposer>
        <OrbitControls makeDefault maxDistance={100} />
        <Environment preset="city" />
      </Canvas>
    </>
  );
};

const Ship = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf')
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0
    })
  }, [])
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube005.geometry} material={materials.Mat0} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_1.geometry} material={materials.Mat1} material-color="black" />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_2.geometry} material={materials.Mat2} material-envMapIntensity={0.2} material-color="black" />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_3.geometry} material={materials.Window_Frame} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_4.geometry} material={materials.Mat4} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_6.geometry} material={materials.Window} />
    </group>
  )
});

function Planet(props) {
  const { position, size, color, texture, radius, speed, rotationSpeed, name } = props;
  const Planet = useRef();
  useFrame((state, delta) => {
  });
  return (
    <>
      <Sphere position={position} args={[size]} >
        <meshStandardMaterial color={color} />
      </Sphere>
    </>
  );
};

export default ProfileScene;
