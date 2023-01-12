import { courseListAPIs } from "apicache/ApiAxios";
import { useQuery } from "react-query";
//Query that stores/accesses the available majors for filtering courses
export const useMajors = () => {
  //async function that is used by uesquery to retrieve data
  async function getMajorListData() {
    const { data } = await courseListAPIs.getMajorListAxios();
    return data;
  }
  return useQuery({
    queryKey: ["get/majors/"],
    queryFn: getMajorListData,
    keepPreviousData: true,
    placeholderData: {
      results: [],
      count: 0,
    },
  });
};
