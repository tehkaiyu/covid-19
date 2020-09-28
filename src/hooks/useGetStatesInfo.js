import useSWR from "swr";

export const useGetStatesInfo = () => {
  const { isLoading, data = [] } = useSWR(
    "https://api.covidtracking.com/states/info"
  );

  let formatted = {};
  if (Array.isArray(data)) {
    formatted = data.reduce((map, d) => {
      map[d.state] = d;
      return map;
    }, {});
  }

  return { isLoading, data: formatted };
};
