//File Description for useUserProfile.js
//useUserProfile.js is a javascript file that exports
//a query function that stores/accesses the user's profile information
//Author: Min Chang Kim
import { homePageAPIs } from "apicache/ApiAxios";
import { useQuery } from "react-query";
export const useUserProfile = (id) => {
  //async function that is used by uesquery to retrieve data
  async function getUserProfileData() {
    const { data } = await homePageAPIs.getUserProfileAxios(id);
    return data;
  }
  return useQuery({
    queryKey: ["get/useProfile/"],
    queryFn: getUserProfileData,
    keepPreviousData: true,
    placeholderData: {
      results: [],
      count: 0,
    },
  });
};
