//File Description for Wrapper.js
//Wrapper.js is a javascript file that contains the wrapper component of the entire website
//the position of the page content is fixed in this page
//the header is included here so that the same header component is kept as the user moves between pages
//Author: Min Chang Kim, Zelong
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import loadable from "@loadable/component";
import { useLocation } from "react-router-dom";
import GlobalBackground from "pages/Global/GlobalBackground";
const Header = loadable(() => import("pages/Header/Header"));
const Wrapper = (props) => {
  const location = useLocation();
  return (
    <>
      <Header />
      {!location.pathname.includes("home") ? <GlobalBackground /> : ""}
      <Content location={location.pathname}>{props.children}</Content>
    </>
  );
};

export default Wrapper;

const Content = styled.div`
  //contain the content of each page to the specified portion of webview
  position: absolute;
  top: ${({ location }) => (location.includes("home") ? "0px" : "130px")};
  left: 0px;
  right: 0px;
  bottom: 0;
`;
