import { React } from "react";
import { Input, Select } from "antd";
import styled from "styled-components";
import Signuplogo from "images/Signuplogo.png";
import { useDispatch } from "react-redux";
import { changeLoginState } from "modules/Global/loginState";

function SignupDisplay(props) {
  const { showSignup, setShowSignup, animateSignup, setAnimateSignup } = props;
  const dispatch = useDispatch();
  const toggleLoginState = () => {
    dispatch(changeLoginState());
  };
  return (
    <>
      <SignupBackground
        onClick={() => {
          setAnimateSignup(false);
          setTimeout(() => setShowSignup(false), 200);
        }}
        style={{
          display: showSignup ? "" : "none",
          opacity: animateSignup ? 1 : 0,
        }}
      ></SignupBackground>
      <SignupWrapper
        style={{
          display: showSignup ? "" : "none",
          opacity: animateSignup ? 1 : 0,
        }}
      >
        <SignupLogo src={Signuplogo}></SignupLogo>
        <SignupText>Sign up</SignupText>
        <Input
          placeholder="Username"
          style={{
            borderRadius: "5.5px",
            width: "75%",
            height: "6vh",
            marginTop: "3vh",
            border: "2px solid black",
          }}
        />
        <Input
          placeholder="Major"
          style={{
            borderRadius: "5.5px",
            width: "75%",
            height: "6vh",
            marginTop: "3vh",
            border: "2px solid black",
          }}
        />
        <Input.Password
          placeholder="Password"
          style={{
            borderRadius: "5.5px",
            width: "75%",
            height: "6vh",
            marginTop: "2vh",
            border: "2px solid black",
            textAlign: "left",
          }}
        />
        <Input.Password
          placeholder="Confirm Password"
          style={{
            borderRadius: "5.5px",
            width: "75%",
            height: "6vh",
            marginTop: "2vh",
            border: "2px solid black",
          }}
        />
        <SignupButton
          onClick={() => {
            toggleLoginState();
            setAnimateSignup(false);
            setTimeout(() => setShowSignup(false), 200);
          }}
        >
          Sign up
        </SignupButton>
      </SignupWrapper>
    </>
  );
}

export default SignupDisplay;

const SignupLogo = styled.img`
  position: relative;
  width: 230px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const SignupBackground = styled.div`
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

const SignupWrapper = styled.div`
  position: absolute;
  text-align: center;
  top: 9vh;
  left: 34%;
  width: 32%;
  height: 82vh;
  background-color: white;
  z-index: 30;
  transition: 200ms ease-in;
`;

const SignupText = styled.p`
  font-family: "Soleil", Arial, sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-top: -20px;
`;

const SignupButton = styled.button`
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
