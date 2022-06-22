import { useQuery } from "react-query";
import { getCityData } from "api/city";

export const useCity = (values) => {
  const { data: cities, status: citiesStatus } = useQuery(
    ["city-data", values],
    async () => {
      const { data } = await getCityData(values);

      return data;
    },
    {
      enabled: values.lat && values.lon,
    }
  );
  return { cities, citiesStatus };
};
