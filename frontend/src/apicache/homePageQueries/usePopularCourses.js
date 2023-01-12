//File Description for usePopularCourses.js
//usePopularCourses.js is a javascript file that exports
//a query function that stores/accesses the popular courses of the user
//Author: Min Chang Kim
import { homePageAPIs } from "apicache/ApiAxios";
import { useQuery } from "react-query";
export const usePopularCourses = (id) => {
  //async function that is used by uesquery to retrieve data
  async function getPopularCoursesData() {
    const { data } = await homePageAPIs.getCourseInfoAxios(id);
    return data;
  }
  return useQuery({
    queryKey: ["get/popularcourses/"],
    queryFn: getPopularCoursesData,
    keepPreviousData: true,
    placeholderData: {
      results: [],
      count: 0,
    },
  });
};
