import { courseListAPIs } from "apicache/ApiAxios";
import { useQuery } from "react-query";
//Query that stores/accesses the available levels for filtering courses
export const useLevels = () => {
  //async function that is used by uesquery to retrieve data
  async function getLevelListData() {
    const { data } = await courseListAPIs.getLevelListAxios();
    return data;
  }
  return useQuery({
    queryKey: ["get/levels/"],
    queryFn: getLevelListData,
    keepPreviousData: true,
    placeholderData: {
      results: [],
      count: 0,
    },
  });
};
