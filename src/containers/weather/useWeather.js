import { useQuery } from "react-query";
import { getDataWeather } from "../../api/weather/index";

export const useWeather = (values) => {
  const { data: weather, status: weatherStatus } = useQuery(
    ["all-data", values],
    async () => {
      const { data } = await getDataWeather(values);

      return data;
    },
    {
      enabled: values.lat && values.lon,
    }
  );
  return { weather, weatherStatus };
};
