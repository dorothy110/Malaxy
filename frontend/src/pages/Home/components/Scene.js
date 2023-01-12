import React, { useRef, useState, createElement } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  useCursor,
  Trail,
  Text,
  Html,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import styled from "styled-components";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import { Avatar, Comment, Tooltip } from "antd";
import * as THREE from "three";
import "./comment.css";
import { useSelector, useDispatch } from "react-redux";
import getPopularCourses from "HelperFunction/getPopularCourses";

/**
 * This function render the solor system displaying in the Scene component.
 * It contains a Canvas for 3d rendering, Stars for the background, lighting, and the Planets
 */
function Scene() {
  const loginState = useSelector((state) => state.loginState);
  const popularCourseList = getPopularCourses();
  return (
    <>
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
        {popularCourseList.map((course) => {
          return (
            <Planet
              position={course.position}
              size={course.size}
              color={course.color}
              radius={course.radius}
              speed={course.speed}
              rotationSpeed={course.rotationSpeed}
              name={course.code}
            />
          );
        })}
        <EffectComposer multisampling={8}>
          <Bloom
            kernelSize={3}
            luminanceThreshold={0.6}
            luminanceSmoothing={0.4}
            intensity={0.2}
          />
        </EffectComposer>
        <OrbitControls makeDefault maxDistance={100} />
      </Canvas>
    </>
  );
}

let t = 0;
let stop = 0;
const lookAtVec = new THREE.Vector3(0, 0, 0);
const lookAtVecDefault = new THREE.Vector3(0, 0, 0);

/**
 * This function renders a planet in the solar system.
 * @param props - The caller of this function can pass in arguments to change the Planet's properties.
 */
function Planet(props) {
  const camera = useThree((state) => state.camera);
  const { position, size, color, texture, radius, speed, rotationSpeed, name } =
    props;
  const [hovered, setHovered] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [updateCamera, setUpdateCamera] = useState(false);
  useCursor(hovered);
  const Planet = useRef();
  const TextObj = useRef();
  useFrame((state, delta) => {
    if (stop === 0) {
      t += 0.0005 * speed;
      Planet.current.position.x = radius * Math.cos(t + position);
      Planet.current.position.z = radius * Math.sin(t + position);
      TextObj.current.position.x = Planet.current.position.x;
      TextObj.current.position.z = Planet.current.position.z;
      state.camera.lookAt(lookAtVec.lerp(lookAtVecDefault, 0.005));
    }
    state.camera.lookAt(lookAtVec);
    if (updateCamera) {
      console.log(lookAtVec);
      state.camera.position.lerp(
        new THREE.Vector3(
          Planet.current.position.x,
          Planet.current.position.y + 10,
          Planet.current.position.z + 30
        ),
        0.02
      );
      state.camera.lookAt(lookAtVec.lerp(Planet.current.position, 0.02));
      if (
        Math.round(state.camera.position.x) ===
          Math.round(Planet.current.position.x) &&
        Math.round(state.camera.position.y) ===
          Math.round(Planet.current.position.y + 10) &&
        Math.round(state.camera.position.z) ===
          Math.round(Planet.current.position.z + 30)
      ) {
        setUpdateCamera(false);
      }
    }
    Planet.current.rotation.y += delta * rotationSpeed;
    TextObj.current.lookAt(camera.position);
  });
  return (
    <>
      <Trail
        width={1} // Width of the line
        color={"white"} // Color of the line
        length={200} // Length of the line
        decay={1.5} // How fast the line fades away
        local={true} // Wether to use the target's world or local positions
        stride={0} // Min distance between previous and current point
        interval={1} // Number of frames to wait before next calculation
        attenuation={(t) => {
          return t * t;
        }}
      >
        <mesh
          ref={Planet}
          position={[
            radius * Math.cos(position),
            0,
            radius * Math.sin(position),
          ]}
          castShadow
          receiveShadow
          onPointerOver={() => {
            setHovered(true);
          }}
          onPointerOut={() => {
            setHovered(false);
          }}
          onPointerMissed={() => {
            stop = 0;
            setUpdateCamera(false);
            setShowComment(false);
          }}
          onClick={() => {
            stop = 1;
            setUpdateCamera(true);
            //camera.lookAt(new THREE.Vector3(Planet.current.position.x, Planet.current.position.y + 5, Planet.current.position.z));
            setShowComment(true);
          }}
        >
          <Html
            position={[0, size + 5, 0]}
            distanceFactor={50}
            center
            style={{
              display: showComment ? "" : "none",
              transition: "300ms ease-in",
              border: "none",
            }}
          >
            <CourseCommentWrapper>
              <CourseComment />
            </CourseCommentWrapper>
          </Html>
          <boxGeometry args={[size, size, size]} />
          <meshStandardMaterial
            color={color}
            emissive={hovered ? color : "black"}
          />
        </mesh>
      </Trail>
      <Text
        position={[0, -size - 0.25, 0]}
        color="white"
        fontSize={1}
        ref={TextObj}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        characters="abcdefghijklmnopqrstuvwxyz0123456789!"
      >
        {name}
      </Text>
    </>
  );
}

/** This function render the lights in the solar system containing six pointlights around the Sun */
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

const CourseCommentWrapper = styled.div`
  background-color: rgb(18, 31, 48);
  width: 400px;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  border: 4px solid white;
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    margin-left: -20px;
    margin-bottom: -11px;
  }
`;

/** This function renders the comment for a course represented by the Planet displaying when user click on one of the Planet */
const CourseComment = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span style={{ color: "white" }} onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span style={{ color: "white" }} className="comment-action">
          {likes}
        </span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span style={{ color: "white" }} onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span style={{ color: "white" }} className="comment-action">
          {dislikes}
        </span>
      </span>
    </Tooltip>,
  ];

  return (
    <Comment
      actions={actions}
      author={<a style={{ color: "white" }}>Han Solo</a>}
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
      }
      content={
        <p style={{ color: "white" }}>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      }
      datetime={
        <Tooltip style={{ color: "white" }} title="2016-11-22 11:22:33">
          <span style={{ color: "white" }}>8 hours ago</span>
        </Tooltip>
      }
    />
  );
};

export default Scene;
