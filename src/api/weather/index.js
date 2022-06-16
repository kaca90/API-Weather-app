import request from "../request";

export const getDataWeather = async (params) =>
  request({
    url: "/onecall",
    method: "GET",
    params,
  });
