import { courseListAPIs } from "apicache/ApiAxios";
import { useQuery } from "react-query";

export const useBreadths = () => {
  //async function that is used by uesquery to retrieve data
  async function getBreadthListData() {
    const { data } = await courseListAPIs.getBreadthListAxios();
    return data;
  }
  return useQuery({
    queryKey: ["get/breadths/"],
    queryFn: getBreadthListData,
    keepPreviousData: true,
    placeholderData: {
      results: [],
      count: 0,
    },
  });
};
