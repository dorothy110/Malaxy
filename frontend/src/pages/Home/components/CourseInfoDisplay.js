import styled from "styled-components";
import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCourseInfoWindowOpen } from "modules/Global/courseInfoWindowOpen";
import Planet from "../../../images/Planet.png";

function CourseInfoDisplay(props) {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(changeCourseInfoWindowOpen());
  };
  const courseInfoWindowOpen = useSelector(
    (state) => state.courseInfoWindowOpen
  );
  console.log(courseInfoWindowOpen);
  return (
    <>
      <CourseInfoBackground
        courseInfoWindowOpen={courseInfoWindowOpen}
        onClick={handleToggle}
      />
      <CourseInfoWindow courseInfoWindowOpen={courseInfoWindowOpen}>
        <li>
          <ul>
            <PlanetImg src={Planet}></PlanetImg>
          </ul>
          <ul></ul>
          <ul></ul>
        </li>
      </CourseInfoWindow>
    </>
  );
}

const CourseInfoWindow = styled.div`
  position: absolute;
  text-align: center;
  top: 12.5vh;
  left: 25%;
  width: 50%;
  height: 75vh;
  background-color: white;
  z-index: 3;
  transition: 200ms ease-in;
  display: ${(props) => (props.courseInfoWindowOpen ? "" : "none")};
`;

const CourseInfoBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 15vh 0;
  background-color: rgba(30, 30, 30, 0.7);
  text-align: center;
  z-index: 2;
  transition: 100ms ease-in;
  display: ${(props) => (props.courseInfoWindowOpen ? "" : "none")};
`;

const PlanetImg = styled.img`
  position: absolute;
  width: 220px;
  left: 80px;
  top: 25px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export default CourseInfoDisplay;
