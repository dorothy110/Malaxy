//File Description for Routes.js
//Routes.js is a javascript file that contains all the possible urls for the website
//Author: Min Chang Kim
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import loadable from "@loadable/component";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./style/GlobalStyle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "utils/ErrorFallback";
import lazyRetry from "utils/lazyRetry";
import CourseList from "pages/CourseList/CourseList";
const queryClient = new QueryClient();
const NotFound = loadable(() => import("./pages/Errors/NotFound"));

const Wrapper = loadable(() => import("pages/Wrapper/Wrapper"));

const Organization = loadable(() =>
  lazyRetry(() => import("pages/Organization/Organization"))
);
const Signup = loadable(() => lazyRetry(() => import("pages/Signup/Signup")));
const Home = loadable(() => lazyRetry(() => import("pages/Home/Home")));
const Profile = loadable(() =>
  lazyRetry(() => import("pages/Profile/Profile"))
);

const Course = loadable(() =>
  lazyRetry(() => import("pages/Course/Description"))
);

// const CourseList = loadable(() =>
//   lazyRetry(() => import("pages/CourseList/CourseList"))
// );

const Directory = () => {
  return (
    //the query client provider allows the different queries to be accessed in all pages of the project
    <QueryClientProvider client={queryClient}>
      {/* react query devtools is used in development to check the data that is stored in react query */}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <Router>
        {/* global css that is applied throughout the project */}
        <GlobalStyle />
        {/* error boundary provides a fallback component so that when one component fails the entire website doesn't crash */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            {/* reroutes the user to /home when only the base url is entered */}
            <Route exact path="/" element={<Navigate to="/home" replace />} />
            <Route
              path="/organization"
              element={
                <Wrapper>
                  <Organization />
                </Wrapper>
              }
            />
            <Route
              path="/home"
              element={
                <Wrapper>
                  <Home />
                </Wrapper>
              }
            />
            <Route
              path="/profile"
              element={
                <Wrapper>
                  <Profile />
                </Wrapper>
              }
            />
            <Route
              path="/signup"
              element={
                <Wrapper>
                  <Signup />
                </Wrapper>
              }
            />
            <Route
              path="/courses"
              element={
                <Wrapper>
                  <CourseList />
                </Wrapper>
              }
            />
            <Route
              path="/course/:id"
              element={
                <Wrapper>
                  <Course />
                </Wrapper>
              }
            />
            <Route exact path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route render={() => <Navigate to="/home" />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </QueryClientProvider>
  );
};

export default Directory;
