import request from "../city/requestCity";

export const getCityData = async (params) =>
  request({
    url: "/reverse",
    method: "GET",
    params,
  });