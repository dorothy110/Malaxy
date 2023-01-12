import { React, useState } from "react";
import styled from "styled-components";
import { Avatar, Pagination } from "antd";
import getAvatar from "HelperFunction/getAvatar";
import ProfileCourse from "./components/ProfileCourse";
import getUserData from "HelperFunction/getUserData";
import { useSelector } from "react-redux";

const Home = () => {
  const username = useSelector((state) => state.userInfo);
  const userData = getUserData(username);
  const [savedCourseList, setSavedCourseList] = useState(userData.savedCourse);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(8);
  const handlePageChange = (page) => {
    setMinIndex((page - 1) * 8);
    setMaxIndex(page * 8);
  };
  return (
    <>
      <Body>
        <ProfileWrapper>
          <StyledAvatar src={getAvatar(userData.id)} size={140} />
          <UserInfoWrapper>
            <Username>{username}</Username>
            <Major>{userData.major}</Major>
          </UserInfoWrapper>
        </ProfileWrapper>
        <CourseWrapper>
          <CourseList>
            {savedCourseList.map((id, index) => {
              if (index >= minIndex && index < maxIndex) {
                return (
                  <CourseListItem>
                    <ProfileCourse
                      id={id}
                      deleteCourse={setSavedCourseList}
                      savedCourseList={savedCourseList}
                    ></ProfileCourse>
                  </CourseListItem>
                );
              }
            })}
          </CourseList>
          <Page
            simple
            defaultCurrent={1}
            pageSize={8}
            onChange={handlePageChange}
            total={savedCourseList.length}
          />
        </CourseWrapper>
      </Body>
    </>
  );
};

export default Home;

const Body = styled.div`
  top: 0;
  position: absolute;
  height: 1270px;
  width: 90%;
  overflow: hidden;
  text-align: center;
  background-color: rgb(30, 30, 30, 0.4);
  z-index: 0;
  margin-left: 5%;
  margin-right: 5%;
  border: solid white 2px;
  border-radius: 15px;
`;

const ProfileWrapper = styled.div`
  position: relative;
  height: 270px;
  width: 92%;
  background-color: rgb(40, 76, 123, 0);
  margin: 4%;
  border: solid white 2px;
  background-size: cover;
`;

const StyledAvatar = styled(Avatar)`
  position: absolute;
  margin-top: 65px;
  left: 35%;
  border: solid rgb(255, 255, 255, 0.8) 2.5px;
  transition: border 100ms ease-in;
  :hover {
    border: solid white 3px;
  }
`;

const UserInfoWrapper = styled.div`
  position: absolute;
  left: 50%;
  height: 140px;
  margin-top: 65px;
  width: 300px;
`;

const Username = styled.div`
  position: relative;
  height: 50px;
  width: fit-content;
  color: white;
  font-family: "Soleil", Arial, sans-serif;
  font-size: 50px;
  font-weight: 700;
  margin-top: 30px;
`;

const Major = styled.div`
  position: relative;
  height: 20px;
  width: fit-content;
  color: white;
  font-family: "Soleil", Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-left: 2px;
  margin-top: 10px;
`;

const CourseWrapper = styled.div`
  position: relative;
  height: 800px;
  width: 92%;
  background-color: rgb(40, 76, 123, 0);
  margin: 4%;
  border: solid white 2px;
`;

const CourseList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 100;
`;

const CourseListItem = styled.li`
  float: left;
  width: 25%;
`;

const Page = styled(Pagination)`
  color: white;
  margin: 0 auto;
  position: absolute;
  width: 50%;
  margin-left: 25%;
  height: 10px;
  top: 90%;
  .ant-pagination-simple-pager input {
    background-color: transparent;
  }
  .ant-pagination-prev button {
    color: white;
  }
  .ant-pagination-next button {
    color: white;
  }
`;
