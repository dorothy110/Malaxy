import { React, useState } from "react";
import styled from "styled-components";
import { RocketOutlined, DeleteOutlined } from "@ant-design/icons";
import getProfileCourse from "HelperFunction/getProfileCourse";
import getCourseLogo from "HelperFunction/getCourseLogo";
import getUserData from "HelperFunction/getUserData";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileCourse = (props) => {
  const savedCourseList = props.savedCourseList;
  const deleteCourse = props.deleteCourse;
  const courseId = props.id;
  const courseName = getProfileCourse(courseId);
  const [Hovered, setHovered] = useState(false);
  const [ForwardHovered, setForwardHovered] = useState(false);
  const [DeleteHovered, setDeleteHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <CourseWrapper
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        Hovered={Hovered}
      >
        <CourseImage src={getCourseLogo(courseId)} />
        <CourseName Hovered={Hovered}>{courseName}</CourseName>
        <OperationWrapper>
          <Forward
            Hovered={Hovered}
            onMouseOver={() => setForwardHovered(true)}
            onMouseLeave={() => setForwardHovered(false)}
            onClick={() => navigate(`/course/${courseId}`)}
          >
            <RocketOutlined
              style={{
                fontSize: "50px",
                color: ForwardHovered ? "black" : "white",
              }}
            />
          </Forward>
          <Delete
            Hovered={Hovered}
            onMouseOver={() => setDeleteHovered(true)}
            onMouseLeave={() => setDeleteHovered(false)}
            onClick={() =>
              deleteCourse(
                savedCourseList.filter(function (id) {
                  return id !== courseId;
                })
              )
            }
          >
            <DeleteOutlined
              style={{
                fontSize: "50px",
                color: DeleteHovered ? "black" : "white",
              }}
            />
          </Delete>
        </OperationWrapper>
      </CourseWrapper>
    </>
  );
};

export default ProfileCourse;

const CourseWrapper = styled.div`
  height: 180px;
  width: 69%;
  margin-left: 15%;
  margin-top: 15%;
  z-index: -1;
  text-align: center;
`;

const CourseImage = styled.img`
  position: relative;
  width: 80%;
  margin-top: 10%;
`;

const CourseName = styled.div`
  position: absolute;
  width: 10%;
  height: fit-content;
  margin-top: 2%;
  margin-left: 3.5%;
  text-align: center;
  color: ${(props) => (props.Hovered ? "black" : "white")};
  font-family: "Soleil", Arial, sans-serif;
  font-size: 1.4vw;
  font-weight: 700;
  transition: opacity 200ms ease-in, transform 200ms ease-in;
  transform: ${(props) => (props.Hovered ? "translateY(-50%)" : "")};
  opacity: ${(props) => (props.Hovered ? "0" : "1")};
`;

const OperationWrapper = styled.div`
  position: relative;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  height: 58%;
`;

const Forward = styled.div`
  float: left;
  width: 35%;
  margin-top: 3%;
  border-radius: 20px;
  cursor: pointer;
  opacity: ${(props) => (props.Hovered ? "1" : "0")};
  transform: ${(props) => (props.Hovered ? "translateX(35%)" : "")};
  transition: opacity 200ms ease-in, transform 200ms ease-in;
  :hover {
    background-color: white;
  }
`;

const Delete = styled.div`
  float: right;
  width: 35%;
  margin-top: 3%;
  border-radius: 20px;
  cursor: pointer;
  transform: ${(props) => (props.Hovered ? "translateX(-35%)" : "")};
  opacity: ${(props) => (props.Hovered ? "1" : "0")};
  transition: opacity 200ms ease-in, transform 200ms ease-in;
  :hover {
    background-color: white;
  }
`;
