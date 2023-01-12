//File Description for ApiAxios.js
//ApiAxios.js is a javascript file that contains all the backend api routes
//Author: Min Chang Kim
import axios from "axios";
export { axios };
//The URL for the backend api. currently set to local address
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.crossDomain = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
export const authAxios = axios;

// APIS relted to the Course List
export const courseListAPIs = {
  //gets list of courses depending on the passed props
  getCourseListAxios(
    //limit of how many courses to return fro pagination
    limit,
    //offset refers to the page number minus one for pagination
    offset,
    //majors to filter the courses by
    majors,
    //breadth to filter the courses by
    breadths,
    //gened to filter the courses by. not used as database currently doesnt have data for this filter
    gened,
    //level to filter the courses by
    levels,
    //search query that is input by the use to filter the courses by
    searchQuery
  ) {
    return authAxios.get(
      `/coursesearch/?limit=${limit ? limit : "20"}&offset=${
        offset && offset ? offset : "0"
      }&majors=${majors ? majors : "all"}&breadths=${
        breadths ? breadths : "all"
      }&levels=${levels ? levels : "all"}${
        searchQuery
          ? searchQuery.length > 0
            ? `&searchQuery=${searchQuery}`
            : ""
          : ""
      }
      `
    );
  },
  //gets list of majors
  getMajorListAxios() {
    return authAxios.get("/major/?limit=10000&offset=0");
  },
  //gets list of breadth
  getBreadthListAxios() {
    return authAxios.get("/breadth/?limit=10000&offset=0");
  },
  //gets list of levels
  getLevelListAxios() {
    return authAxios.get("/level/?limit=10000&offset=0");
  },
};

export const homePageAPIs = {
  //gets the popular courses to display in homepage
  getPopularCoursesAxios(id) {
    return authAxios.get(`/popularcourses/${id}`);
  },
  //gets the userprofile info
  getUserProfileAxios(id) {
    return authAxios.get(`/useprofile/${id}`);
  },
  //posts to the backend the signup info for a new user
  signupAxios(data) {
    return authAxios.post("/signup/", data);
  },
};

export const courseInfoAPIs = {
  //gets general information for the course corresponding to id
  getCourseInfoAxios(id) {
    return authAxios.get(`/courseInfo/${id}`);
  },
  //gets the grade distribution depending on the instructor and semester
  getCourseGradeAxios(instructor, semester, id) {
    return authAxios.get(
      `/courseInfo/${id}/?instructor=${instructor}&semester=${semester}`
    );
  },
  //gets the discussion board info for the course corresponding to id
  getCourseDiscussionAxios(id) {
    return authAxios.get(`/coursediscussion/${id}`);
  },
};
