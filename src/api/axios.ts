import axios from "axios";

function createInstance(url?: string) {
  return axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}${url}`,
  });
}

export const instance = createInstance();
export const todoInstance = createInstance("/todos");
