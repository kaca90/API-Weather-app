import request from "../request";

export const getDataWeather = async (params) =>
  request({
    url: "/data/2.5/onecall",
    method: "GET",
    params,
  });
