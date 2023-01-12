import { React, useRef, useState } from "react";
import { Input, Alert } from "antd";
import styled from "styled-components";
import Loginlogo from "images/Loginlogo.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLoginState } from "modules/Global/loginState";
import { updateUserInfo } from "modules/Global/userInfo";
import getUserData from "HelperFunction/getUserData";

/** This function displays the Login window when the guest click on the Login botton displying on the header */
function LoginDisplay(props) {
  const { showLogin, setShowLogin, animateLogin, setAnimateLogin } = props;
  const [displayError, setDisplayError] = useState(false);
  const dispatch = useDispatch();
  const toggleLoginState = () => {
    dispatch(changeLoginState());
  };
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");

  function handleLoginClick() {
    const usernameInput = usernameInputRef.current.input.value;
    if (
      passwordInputRef.current.input.value !==
      getUserData(usernameInput).password
    ) {
      setDisplayError(true);
    } else {
      dispatch(updateUserInfo(usernameInput));
      toggleLoginState();
      setDisplayError(false);
      setAnimateLogin(false);
      setTimeout(() => setShowLogin(false), 200);
      navigateToHome();
    }
  }
  return (
    <>
      <LoginBackground
        onClick={() => {
          setAnimateLogin(false);
          setTimeout(() => setShowLogin(false), 200);
        }}
        style={{
          display: showLogin ? "" : "none",
          opacity: animateLogin ? 1 : 0,
        }}
      ></LoginBackground>
      <LoginWrapper
        style={{
          display: showLogin ? "" : "none",
          opacity: animateLogin ? 1 : 0,
        }}
      >
        <LoginLogo src={Loginlogo}></LoginLogo>
        <LoginText>Log in</LoginText>
        <Alert
          message="Incorrect password or username"
          type="error"
          style={{
            position: "absolute",
            width: "75%",
            marginLeft: "12.5%",
            display: displayError ? "" : "none",
          }}
        />
        <Input
          placeholder="Username"
          ref={usernameInputRef}
          style={{
            borderRadius: "5.5px",
            width: "75%",
            height: "6vh",
            marginTop: "6vh",
            border: "2px solid black",
          }}
        />
        <Input.Password
          placeholder="Password"
          ref={passwordInputRef}
          style={{
            borderRadius: "5.5px",
            width: "75%",
            height: "6vh",
            marginTop: "2vh",
            border: "2px solid black",
          }}
        />
        <LoginButton
          onClick={() => {
            handleLoginClick();
          }}
        >
          Log in
        </LoginButton>
        <ResetPassword>Forgot password?</ResetPassword>
      </LoginWrapper>
    </>
  );
}

export default LoginDisplay;

const LoginLogo = styled.img`
  position: relative;
  width: 260px;
  margin-top: 50px;
`;

const LoginBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 15vh 0;
  background-color: rgba(30, 30, 50, 0.7);
  text-align: center;
  z-index: 20;
  transition: 100ms ease-in;
`;

const LoginWrapper = styled.div`
  position: absolute;
  text-align: center;
  top: 12.5vh;
  left: 35%;
  width: 30%;
  height: 75vh;
  background-color: white;
  z-index: 30;
  transition: 200ms ease-in;
`;

const LoginText = styled.p`
  font-family: "Soleil", Arial, sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-top: -10px;
`;

const LoginButton = styled.button`
  color: black;
  border-radius: 5.5px;
  width: 75%;
  height: 6vh;
  margin-top: 3vh;
  background-color: rgba(0, 0, 0, 0);
  font-family: "Soleil", Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  border: 2px solid black;
  border-radius: 6px;
  transition: 150ms ease-in;
  :hover {
    background-color: black;
    color: white;
  }
  cursor: pointer;
`;

const ResetPassword = styled.p`
  width: fit-content;
  font-family: "Soleil", Arial, sans-serif;
  padding-top: 1vh;
  margin: auto;
  :hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
