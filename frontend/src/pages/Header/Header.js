import { React, useState, useEffect } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import logo from "../../images/Logo.png";
import SearchBar from "pages/Header/SearchBar";
import BookData from "../../TestData/TestData.json";
import LoginDisplay from "pages/Home/components/LoginDisplay";
import SignupDisplay from "pages/Home/components/SignupDisplay";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "antd";
import { changeLoginState } from "modules/Global/loginState";
import getAvatar from "HelperFunction/getAvatar";
import getUserData from "HelperFunction/getUserData";

/** This Function redners the Header for each page */
const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [animateLogin, setAnimateLogin] = useState(false);

  const [showSignup, setShowSignup] = useState(false);
  const [animateSignup, setAnimateSignup] = useState(false);

  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
  const [animateAvatarDropdown, setAnimateAvatarDropdown] = useState(false);
  const loginState = useSelector((state) => state.loginState);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };
  const navigateToProfile = () => {
    navigate("/profile");
  };
  const dispatch = useDispatch();
  const toggleLoginState = () => {
    dispatch(changeLoginState());
  };
  const location = useLocation();

  //const [username, setUsername] = useState("");
  const username = useSelector((state) => state.userInfo);
  const userData = getUserData(username);

  return (
    <>
      <LoginDisplay
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        animateLogin={animateLogin}
        setAnimateLogin={setAnimateLogin}
      />
      <SignupDisplay
        showSignup={showSignup}
        setShowSignup={setShowSignup}
        animateSignup={animateSignup}
        setAnimateSignup={setAnimateSignup}
      />
      <HeaderWrapper>
        <Logo src={logo} onClick={navigateToHome}></Logo>
        <Login
          style={{ left: "19%", width: "150px" }}
          onClick={() => {
            navigate("/courses");
          }}
        >
          CourseList
        </Login>
        {!location.pathname.includes("profile") ? (
          <>
            <Login
              style={{ right: "250px" }}
              onClick={() => {
                setShowSignup(true);
                setTimeout(() => setAnimateSignup(true), 100);
              }}
              loginState={loginState}
            >
              Sign up
            </Login>
            <Login
              onClick={() => {
                setShowLogin(true);
                setTimeout(() => setAnimateLogin(true), 100);
              }}
              loginState={loginState}
            >
              Log in
            </Login>
          </>
        ) : (
          ""
        )}
        {location.pathname.includes("profile") ? (
          <Login
            onClick={() => {
              if (loginState) toggleLoginState();
              navigateToHome();
            }}
          >
            Log out
          </Login>
        ) : (
          <AvatarWrapper
            loginState={loginState}
            onMouseLeave={() => {
              setAnimateAvatarDropdown(false);
              setTimeout(() => setShowAvatarDropdown(false), 100);
            }}
          >
            <StyledAvatar
              src={getAvatar(userData.id)}
              size={75}
              onMouseEnter={() => {
                setShowAvatarDropdown(true);
                setTimeout(() => setAnimateAvatarDropdown(true), 100);
              }}
            />
            <AvatarDropdown
              showAvatarDropdown={showAvatarDropdown}
              animateAvatarDropdown={animateAvatarDropdown}
            >
              <DropdownItem
                onClick={() => {
                  setAnimateAvatarDropdown(false);
                  setTimeout(() => setShowAvatarDropdown(false), 100);
                  navigateToProfile();
                }}
              >
                Profile
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  setAnimateAvatarDropdown(false);
                  setTimeout(() => setShowAvatarDropdown(false), 100);
                  toggleLoginState();
                }}
              >
                Log out
              </DropdownItem>
            </AvatarDropdown>
          </AvatarWrapper>
        )}
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
  line-height: 1;
  width: 100%;
  height: 110px;
  z-index: 1;
`;

const Logo = styled.img`
  position: absolute;
  width: 220px;
  left: 80px;
  top: 25px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const Login = styled.div`
  color: white;
  width: 108px;
  height: 40px;
  position: absolute;
  right: 100px;
  top: 50px;
  font-family: "Soleil", Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  padding: 7px 0;
  text-align: center;
  border: 2px solid white;
  border-radius: 6px;
  transition: 100ms ease-in;
  display: ${(props) => (props.loginState ? "none" : "")};
  :hover {
    background-color: white;
    color: black;
  }
  cursor: pointer;
`;

const AvatarWrapper = styled.div`
  position: absolute;
  right: 95px;
  top: 38px;
  display: ${(props) => (props.loginState ? "" : "none")};
`;

const StyledAvatar = styled(Avatar)`
  border: solid rgb(255, 255, 255, 0.8) 1.5px;
  transition: border 100ms ease-in;
  :hover {
    border: solid white 2px;
  }
`;

const AvatarDropdown = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  margin-top: 18px;
  background-color: transparent;
  border-top: solid white 1.5px;
  display: ${(props) => (props.showAvatarDropdown ? "" : "none")};
  opacity: ${(props) => (props.animateAvatarDropdown ? "1" : "0")};
  transition: opacity 100ms ease-in;
  ::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    margin-top: -15px;
    margin-left: 40%;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 15px solid white;
  }
`;

const DropdownItem = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  color: white;
  text-align: center;
  background-color: transparent;
  font-family: "Soleil", Arial, sans-serif;
  font-size: 0.85vw;
  font-weight: 600;
  line-height: 50px;
  border-bottom: solid white 1.5px;
  border-right: solid white 1.5px;
  border-left: solid white 1.5px;
  transition: color 100ms ease-in, background-color 100ms ease-in;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
  }
`;

export default Header;
