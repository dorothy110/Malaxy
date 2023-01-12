//File Description for useCourseInfo.js
//useCourseInfo.js is a javascript file that exports
//a query function that stores/accesses a course's general information
//Author: Min Chang Kim
import { courseInfoAPIs } from "apicache/ApiAxios";
import { useQuery } from "react-query";
export const useCourseInfo = (id) => {
  async function getCourseInfoData() {
    const { data } = await courseInfoAPIs.getCourseInfoAxios(id);
    return data;
  }
  return useQuery({
    queryKey: ["get/courseinfo/", id],
    queryFn: getCourseInfoData,
    keepPreviousData: true,
  });
};
