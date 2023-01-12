import { React, Suspense } from "react";
import styled from "styled-components";
import Scene from "./components/Scene";

/** This function render the Home page and the main body is the Body component containing a Scene componement */
const Home = () => {
  return (
    <>
      <Body>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Body>
    </>
  );
};

export default Home;

/** The css style for the Body Component */
const Body = styled.div`
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  text-align: center;
  z-index: 0;
`;
