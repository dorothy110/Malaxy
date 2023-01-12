//File Description for useCourseList.js
//useCourseList.js is a javascript file that exports
//a query function that stores/accesses the available courses depeding on the passed parameters.
//Author: Min Chang Kim
import { courseListAPIs } from "apicache/ApiAxios";
import { useQuery } from "react-query";
export const useCourseList = (
  //the current page number that is being displayed
  page,
  //the number of courses displayed per page
  coursePerPage,
  //the major to filter the courses by
  majors,
  //the breadth to filter the courses by
  breadths,
  //the gened type to filter the courses by. currently not used as db doesnt contain this data as of now
  gened,
  //the level to filter the courses by
  levels,
  //search query that is input by the use to filter the courses by
  searchQuery
) => {
  //async function that is used by uesquery to retrieve data
  async function getCourseListData() {
    const { data } = await courseListAPIs.getCourseListAxios(
      coursePerPage,
      coursePerPage * (page - 1),
      majors,
      breadths,
      gened,
      levels,
      searchQuery
    );
    return data;
  }
  return useQuery({
    queryKey: [
      "get/courselist/",
      page,
      coursePerPage * (page - 1),
      majors,
      breadths,
      levels,
      `searchQuery${searchQuery}`,
    ],
    queryFn: getCourseListData,
    keepPreviousData: true,
    placeholderData: {
      results: [],
      count: 0,
    },
  });
};
