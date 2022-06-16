import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    appid: process.env.REACT_APP_API_KEY,
  },
});

const request = axiosClient;

export default request;
