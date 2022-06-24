import request from "../request";

export const getCityData = async (params) =>
  request({
    url: "/geo/1.0/reverse",
    method: "GET",
    params,
  });
