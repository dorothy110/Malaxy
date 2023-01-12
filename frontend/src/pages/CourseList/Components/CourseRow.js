//File Description for CourseRow.js
//CourseRow.js is a javascript file that contains the row component in the course list page
//Author: Min Chang Kim
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const CourseRow = ({ course }) => {
  const navigate = useNavigate();
  console.log(course);
  //sends user to the course description page when the component is clicked
  const handleCourseClick = () => {
    navigate(`/course/${course.CourseId}`);
  };
  return (
    <CourseRowWrapper onClick={handleCourseClick}>
      <CourseInfoWrapper>
        {course.CourseName} - {course.CourseTitle}
      </CourseInfoWrapper>
      <CourseInfoWrapper>
        Credits: {course.CourseCredits} &nbsp;&nbsp;&nbsp; Average GPA:{" "}
        {course.Gpa}
      </CourseInfoWrapper>
    </CourseRowWrapper>
  );
};

export default CourseRow;

const CourseInfoWrapper = styled.div``;

const CourseRowWrapper = styled.div`
  background-color: white;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  border: 1px solid lightgrey;
  margin-bottom: 4px;
  -webkit-box-shadow: ${({ theme }) => theme.elevations.elevation_medium};
  box-shadow: ${({ theme }) => theme.elevations.elevation_medium};
  cursor: pointer;
  //provides a color change when user hovers over the component to provide better visualization
  &:hover {
    background-color: lightgray;
  }
`;
