import axios, { AxiosInstance } from "axios";

export const server = () => {
  const nodeEnv = process.env.NODE_ENV;
  const url =
    nodeEnv == "production"
      ? process.env.REACT_APP_URL_PRD
      : process.env.REACT_APP_URL_LOCAL;

  console.log(url);
  return axios.create({
    baseURL: url,
  });
};
