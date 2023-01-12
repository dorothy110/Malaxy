//File Description for useCourseDiscussion.js
//useCourseDiscussion.js is a javascript file that exports
//a query function that stores/accesses the course's discussion
//Author: Min Chang Kim
import { courseInfoAPIs } from "apicache/ApiAxios";
import { useQuery } from "react-query";
export const useCourseDiscussion = () => {
  //async function that is used by uesquery to retrieve data
  async function getCourseDiscussionData() {
    const { data } = await courseInfoAPIs.getCourseDiscussionAxios();
    return data;
  }
  return useQuery({
    queryKey: ["get/useProfile/"],
    queryFn: getCourseDiscussionData,
    keepPreviousData: true,
    placeholderData: {
      results: [],
      count: 0,
    },
  });
};
