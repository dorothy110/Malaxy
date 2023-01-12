//File Description for useCourseGrade.js
//useCourseGrade.js is a javascript file that exports
//a query function that stores/accesses a course's grade depending on the instructor and semester
//Author: Min Chang Kim
import { courseInfoAPIs } from "apicache/ApiAxios";
import { useQuery } from "react-query";
export const useCourseGrade = (instructor, semester, id) => {
  async function getCourseGradeData() {
    const { data } = await courseInfoAPIs.getCourseGradeAxios(
      instructor,
      semester,
      id
    );
    return data;
  }
  return useQuery({
    queryKey: ["get/coursegrade/", instructor, semester],
    queryFn: getCourseGradeData,
    keepPreviousData: true,
  });
};
