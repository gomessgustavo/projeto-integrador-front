import axios from "axios";

export const server = () => {
  const nodeEnv = process.env.NODE_ENV;
  const url =
    nodeEnv === "production"
      ? process.env.REACT_APP_URL_PRD
      : process.env.REACT_APP_URL_LOCAL;

  return axios.create({
    baseURL: url,
  });
};
