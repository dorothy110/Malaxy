//File Description for CourseList.js
//CourseList.js is a javascript file that renders the courses page of the website
//Author: Min Chang Kim
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Input, Select, SelectOption } from "ui";
import CourseRow from "./Components/CourseRow";
import ListPageNav from "./Components/ListPageNav";
import { useSelector, useDispatch } from "react-redux";
import { changeCoursePerPage } from "modules/CourseList/coursePerPage";
import useViewport from "hooks/useViewPort";
import { useCourseList, useBreadths, useLevels, useMajors } from "apicache";

const CourseList = () => {
  const { height } = useViewport();
  //state that stores the user's search value
  const [searchQuery, setSearchQuery] = useState("");
  //state that stores the major to filter by
  const [major, setMajor] = useState("all");
  //state that stores the breadth to filter by
  const [breadth, setBreadth] = useState("all");
  //state that stores the level to filter by
  const [level, setLevel] = useState("all");
  //state that stores the current page that is being viewed
  const [page, setPage] = useState(1);
  //redux value that stores the number of courses to be rendered per page
  const coursePerPage = useSelector((state) => state.coursePerPage);
  const dispatch = useDispatch();

  //the query for the list of available majors
  const {
    data: { results: majorList },
  } = useMajors();

  //renders a list of options for the major filter
  const MajorOptions = () =>
    majorList.map((major) => (
      <SelectOption key={major.MajorId} title={major.MajorName}>
        {major.MajorName}
      </SelectOption>
    ));

  //the query for the list of available breadths
  const {
    data: { results: breadthList },
  } = useBreadths();

  //renders a list of options for the breadth filter
  const BreadthOptions = () =>
    breadthList.map((breadth) => (
      <SelectOption key={breadth.BreadthId} title={breadth.BreadthName}>
        {breadth.BreadthName}
      </SelectOption>
    ));
  //the query for the list of available levels
  const {
    data: { results: levelList },
  } = useLevels();

  //simpler example of useQuery for other frontend members
  // const { data } = useLevels();

  //renders a list of options for the major filter
  const LevelOptions = () =>
    levelList.map((level) => (
      <SelectOption key={level} title={level}>
        {level}
      </SelectOption>
    ));

  //the query for the list of courses to be displayed and the total number of courses that fit the input filters/search query
  const {
    data: { results: courseList, count: courseNumber },
  } = useCourseList(
    page,
    coursePerPage,
    major,
    breadth,
    null,
    level,
    searchQuery
  );

  //onchange function that updates the major state on user input
  const handleMajorChange = (value) => {
    setMajor(value);
  };
  //onchange function that updates the breadth state on user input
  const handleBreadthChange = (value) => {
    setBreadth(value);
  };
  //onchange function that updates the level state on user input
  const handleLevelChange = (value) => {
    setLevel(value);
  };
  //onchange function that updates the saerchquery state on user input
  const handleSearchQueryChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };
  //function that updates the redux value for the number of courses displayed per page
  const handleCoursePerPageChange = (value) => {
    dispatch(changeCoursePerPage(value));
  };

  return (
    <CourseListWrapper>
      <FilterContainer>
        <FilterLeft>
          <FilterWrapper>
            <FilterName>Search for a Course</FilterName>
            <CourseSearchInput onChange={handleSearchQueryChange} allowClear />
          </FilterWrapper>
          <FilterWrapper>
            <FilterName>Major</FilterName>
            <Filter
              showSearch
              optionFilterProp="title"
              value={major}
              onChange={handleMajorChange}
            >
              {MajorOptions()}
              <FilterOption key={"all"} value={"all"}>
                All
              </FilterOption>
            </Filter>
          </FilterWrapper>
          <FilterWrapper>
            <FilterName>Breadth</FilterName>
            <Filter
              showSearch
              optionFilterProp="title"
              value={breadth}
              onChange={handleBreadthChange}
            >
              {BreadthOptions()}
              <FilterOption key={"all"} value={"all"}>
                All
              </FilterOption>
            </Filter>
          </FilterWrapper>
          <FilterWrapper>
            <FilterName>Level</FilterName>
            <Filter
              showSearch
              optionFilterProp="title"
              value={level}
              onChange={handleLevelChange}
            >
              {LevelOptions()}
              <FilterOption key={"all"} value={"all"}>
                All
              </FilterOption>
            </Filter>
          </FilterWrapper>
        </FilterLeft>
        <FilterRight>
          <FilterWrapper>
            <FilterName>Course per page</FilterName>
            <Filter
              defaultValue={20}
              value={coursePerPage}
              onChange={handleCoursePerPageChange}
            >
              <FilterOption value={10}>10</FilterOption>
              <FilterOption value={20}>20</FilterOption>
              <FilterOption value={30}>30</FilterOption>
              <FilterOption value={50}>50</FilterOption>
              <FilterOption value={100}>100</FilterOption>
            </Filter>
          </FilterWrapper>
        </FilterRight>
      </FilterContainer>
      <ListContainer height={height}>
        {courseList.map((course) => (
          <CourseRow key={course.CourseId} course={course}></CourseRow>
        ))}
      </ListContainer>
      <ListPageNav page={page} setPage={setPage} courseNumber={courseNumber} />
    </CourseListWrapper>
  );
};

export default CourseList;

const CourseSearchInput = styled(Input)``;

const CourseListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FilterContainer = styled.div`
  height: 60px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterLeft = styled.div`
  display: flex;
  align-items: center;
`;
const FilterRight = styled.div`
  display: flex;
  align-items: center;
`;

const FilterWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const FilterName = styled.div`
  border-radius: 4px;
  display: flex;
  width: fit-content;
  padding: 0px 4px;
  margin-bottom: 2px;
  background-color: #a0cded;
`;
const Filter = styled(Select)`
  width: 200px;
`;
const FilterOption = styled(SelectOption)``;
const ListContainer = styled.div`
  width: 90%;
  height: ${({ height }) => `${height - 220}px`};
  border: 1px solid lightgrey;
  border-radius: 4px;
  overflow-y: scroll;
  background-color: white;
`;
