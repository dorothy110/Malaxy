//File Description for ListPageNav.js
//ListPageNav.js is a javascript file that contains the navigation bar used in the
//course list page for pagination
//Author: Min Chang Kim
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "ui";
import { useSelector } from "react-redux";
import usePrevState from "hooks/usePrevState";
const ListPageNav = ({ page, courseNumber, setPage }) => {
  const coursePerPage = useSelector((state) => state.coursePerPage);
  const [pageButtonList, setPageButtonList] = useState([]);
  const prevCoursePerPage = usePrevState(coursePerPage);
  //function to calculate the floor value depending on page and courses displayed per page
  const floorCalc = (page, coursePerPage) => {
    return Math.floor((page - 1) / 10) * coursePerPage * 10 + 1;
  };
  //function to calculate the ceiling value depending on floor value, page and courses displayed per page
  const ceilingCalc = (floor, courseNumber, coursePerPage) => {
    return floor + coursePerPage * 10 - 1 < courseNumber
      ? floor + coursePerPage * 10
      : courseNumber;
  };

  //update the value for the buttons based on the change of courses displayed per page
  useEffect(() => {
    const floor = floorCalc(page, coursePerPage);
    const ceiling = ceilingCalc(floor, courseNumber, coursePerPage);
    let list = [];
    for (let i = floor; i < ceiling; i += coursePerPage) {
      list.push(Math.floor(i / coursePerPage) + 1);
    }
    setPageButtonList(list);
  }, [page, courseNumber, coursePerPage]);

  //updates the current page depending on the change of courses displated per page
  useEffect(() => {
    if (prevCoursePerPage) {
      const newPage = Math.floor((prevCoursePerPage * page) / coursePerPage);
      if (newPage > 0) {
        setPage(Math.floor((prevCoursePerPage * page) / coursePerPage));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coursePerPage, setPage]);

  //handles update of page state as per the user's input
  const handlePageClick = (newPage) => {
    setPage(newPage);
  };

  //handles update of page state as per the user's input to move to the next available section of pages
  const handleArrowForwardClick = () => {
    const floor = floorCalc(page, coursePerPage);
    const ceiling = ceilingCalc(floor, courseNumber, coursePerPage);
    //prevent change if user is already at the last section of pages
    if (ceiling !== courseNumber) {
      setPage(ceiling / coursePerPage + 1);
    }
  };
  //handles update of page state as per the user's input to move to the previous available section of pages
  const handleArrowBackClick = () => {
    const floor = floorCalc(page, coursePerPage);
    //prevent change if there are no previous section of pages
    if (floor > 0) {
      setPage(floor / coursePerPage);
    }
  };
  return (
    <ListPageContainer>
      <ListPageButton onClick={handleArrowBackClick} page={page}>
        {"<"}
      </ListPageButton>
      {pageButtonList.map((button) => {
        return (
          <ListPageButton
            key={button}
            onClick={() => handlePageClick(button)}
            currentpage={page === button ? "true" : "false"}
          >
            {button}
          </ListPageButton>
        );
      })}
      <ListPageButton onClick={handleArrowForwardClick} page={page}>
        {">"}
      </ListPageButton>
    </ListPageContainer>
  );
};

export default ListPageNav;

const ListPageButton = styled(Button)`
  border: 1px solid
    ${({ currentpage }) => (currentpage === "true" ? "#a0cded" : "grey")} !important;
  color: ${({ currentpage }) =>
    currentpage === "true" ? "#a0cded" : ""} !important;
  border-radius: 4px;
  height: 32px;
  width: 32px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px;
  :focus {
    border-color: ${({ currentpage }) =>
      currentpage === "true" ? "#a0cded" : "grey"};
    color: ${({ currentpage }) => (currentpage === "true" ? "#a0cded" : "")};
  }
`;

const ListPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;
